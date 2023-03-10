'use strict';

const KmsClient = require('./kmsClient')
    , {
        blockchainEnum,
        networkEnum,
        feePriorityEnum,
        prepareStrategyEnum,
        tokenEnum
    } = require('./enumerations')
    , {
        XPUB_DERIVATION_PATHS: xPubDerivationPathsEnum,
        XPUB_DERIVATION_TYPES: xPubDerivationTypesEnum
    } = require('./helpers/xpubFormatsHelper')
    , {
        WalletService,
        SignService,
        AddressService
    } = require('./services')
    , {
        AccountBasedFeeOptionsModel,
        UTXOBasedFeeOptionsModel,
        RecipientModel
    } = require('./models')
;

module.exports = {
    Models: {
        AccountBasedFeeOptionsModel: AccountBasedFeeOptionsModel,
        UTXOBasedFeeOptionsModel: UTXOBasedFeeOptionsModel,
        RecipientModel: RecipientModel,
    },
    Enumerations: {
        Blockchains: blockchainEnum.blockchains,
        Networks: networkEnum.NETWORKS,
        FeePriorities: feePriorityEnum,
        PrepareStrategies: prepareStrategyEnum,
        xPubDerivationPaths: xPubDerivationPathsEnum,
        xPubDerivationTypes: xPubDerivationTypesEnum,
        TokenStandards: tokenEnum.BLOCKCHAIN_STANDARDS
    },
    Services: {
        WalletService: WalletService,
        SignService: SignService,
        AddressService: AddressService
    },
    Client: KmsClient,
};
