// Components
const CONSTANTS = require('../../constants');

// Libraries
const _ = require('lodash');

/**
 * A helper function which returns a series of pipeline commands to emulate pagination-like behaviour
 * // TODO: Figure out a way to also include the totalCount using '$facet'. https://docs.mongodb.com/manual/reference/operator/aggregation/facet/
 *
 * @param currentPage
 * @param itemsPerPage
 * @param projectionPerItem - An object with the structure: {attribute: "$attribute", ...} E.g. {_id: "$_id"}
 * @return {[*,*,*,*]}
 */
function generatePaginationPipeline(currentPage, itemsPerPage, projectionPerItem) {
    return [
        {
            $skip: currentPage > 0 ? ( ( currentPage - 1 ) * itemsPerPage ) : 0
        },
        {
            $limit: itemsPerPage
        },
        {
            $group: {
                _id: null,
                items: {
                    $push: projectionPerItem
                },
                pageCount: {
                    $sum: 1
                }
            }
        },
        {
            $project: {
                _id: 0,
                items: 1,
                meta: {
                    pageCount: '$pageCount',
                    currentPage: {"$literal": currentPage},
                    itemsPerPage: {"$literal": itemsPerPage}
                }
            }
        }
    ];
}

/**
 * A helper function which returns a series of pipeline commands to emulate pagination-like behaviour
 * // TODO: Figure out a way to also include the totalCount using '$facet'. https://docs.mongodb.com/manual/reference/operator/aggregation/facet/
 *
 * @param currentPage
 * @param itemsPerPage
 * @param projectionPerItem - An object with the structure: {attribute: "$attribute", ...} E.g. {_id: "$_id"}
 * @param sortBy - by default -1 = descending and 1 = ascending 
 * @return {[*,*,*,*]}
 */
function paginateWithoutMetaData(currentPage, itemsPerPage, projectionPerItem, sortBy = -1) {
    return [
        { 
            $sort : { reviewedAt : sortBy} 
        },
        {
            $skip: currentPage > 0 ? ( ( currentPage - 1 ) * itemsPerPage ) : 0
        },
        {
            $limit: itemsPerPage
        },
        {
            $project: projectionPerItem
        }
    ];
}

/**
 *  Converts all the values of a normal queryParam object based on the 'type' set per attribute in the provided searchValidator
 *
 * @param queryParams
 * @param searchValidator
 * @return {{deleted: boolean}}
 */
function convertQueryParamsToMongoQuery(queryParams, searchValidator) {
    let conditions = {
        deleted: false
    };

    for (let searchKey in queryParams) {
        if (queryParams.hasOwnProperty(searchKey) && searchValidator.hasOwnProperty(searchKey)) {
            let searchType = searchValidator[searchKey].type;

            if (searchType === CONSTANTS.SEARCH_TYPE.MATCH) {
                conditions[searchKey] = queryParams[searchKey];
            } else if (searchType === CONSTANTS.SEARCH_TYPE.REGEX) {
                conditions[searchKey] = new RegExp(queryParams[searchKey], searchValidator[searchKey].options);
            }
        }
    }

    return conditions;
}


/**
 * Converts regular search query params into a series of $match pipelines. Must pass in a searchValidator object to
 * determine the $match type, and any $options when running regex.
 *
 * An example of a searchValidator can be seen in 'src/features/routing/models/routing/rules/searchMany.js'
 *
 * @param queryParams
 * @param searchValidator
 * @return {[*]}
 */
function convertQueryParamsToPipeline(queryParams, searchValidator) {
    // The init condition. This is mandatory regardless of any aggregation
    let pipeline = [{
        $match: {
            deleted: false
        }
    }];

    for (let searchKey in queryParams) {
        if (queryParams.hasOwnProperty(searchKey) && searchValidator.hasOwnProperty(searchKey)) {
            const searchValue = queryParams[searchKey];
            const searchType = searchValidator[searchKey].type;
            const searchObject = {};

            if (searchType === CONSTANTS.SEARCH_TYPE.MATCH) {
                searchObject[searchKey] = searchValue;
            } else if (searchType === CONSTANTS.SEARCH_TYPE.REGEX) {
                searchObject[searchKey] = {$regex: searchValue};

                if (searchValidator[searchKey].options) {
                    searchObject[searchKey]['$options'] = searchValidator[searchKey].options;
                }
            } else if (searchType === CONSTANTS.SEARCH_TYPE.WITHIN) {
                const strVal = searchValue.toString();
                const delimiter = searchValidator[searchKey]['delimiter'] || ',';
                const searchArray = strVal ? strVal.split(delimiter) : '';

                searchObject[searchKey] = {$in: searchArray};
            }

            pipeline.push({$match: searchObject});
        }
    }

    return pipeline;
}

module.exports = {
    generatePaginationPipeline,
    convertQueryParamsToMongoQuery,
    convertQueryParamsToPipeline,
    paginateWithoutMetaData
};