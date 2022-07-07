'use strict';

const { BaseCryptoAPIsLibAwareService } = require("./baseServices");

/**
 * CallbacksService
 *
 * @class CallbacksService
 * @extends {BaseCryptoAPIsLibAwareService}
 */
class CallbacksService extends BaseCryptoAPIsLibAwareService {
    /**
     * @param {Object} cryptoApis
     * @param {string} blockchain
     * @param {string} network
     */
    constructor(cryptoApis, blockchain, network) {
        super(cryptoApis, blockchain, network)
        this.apiInstance = new this.cryptoApis.CallbackDataApi();
    }

    /**
     * @param {string} transactionId
     * @param {string|null} context
     * @returns {getTransactionDetailsByTransactionIDFromCallback}
     */
    getTransactionDetailsByTransactionIDFromCallback(transactionId, context) {
        const opts = {
            context: context,
        };

        return this.apiInstance.getTransactionDetailsByTransactionIDFromCallback(this.blockchain, this.network, transactionId, opts);
    }
}

module.exports = CallbacksService;