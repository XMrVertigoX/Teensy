var group__edma =
[
    [ "edma_config_t", "group__edma.html#structedma__config__t", [
      [ "enableContinuousLinkMode", "group__edma.html#aa45bd940803ec470b60e5b5d5bd0356b", null ],
      [ "enableHaltOnError", "group__edma.html#a4d319e29ce0ab4f2406aae26a136422a", null ],
      [ "enableRoundRobinArbitration", "group__edma.html#aef3200ba1711d6649c69fca888cf3468", null ],
      [ "enableDebugMode", "group__edma.html#a7929ad2b37282a423c5ac5d7f4c7e744", null ]
    ] ],
    [ "edma_transfer_config_t", "group__edma.html#structedma__transfer__config__t", [
      [ "srcAddr", "group__edma.html#aa1ff988241ea8238e8793f4236c55553", null ],
      [ "destAddr", "group__edma.html#a70e10c552f356c4d2935e9f308a3317a", null ],
      [ "srcTransferSize", "group__edma.html#ae5f96bb8d80f6f7a6c8a687e8a42a77e", null ],
      [ "destTransferSize", "group__edma.html#afe8f8da3ed5f7c4079c818ef0197a4d7", null ],
      [ "srcOffset", "group__edma.html#a25b479621f01e4e2cf7fcdab62d6e266", null ],
      [ "destOffset", "group__edma.html#a09907c86542286a95a655e748789ba3e", null ],
      [ "minorLoopBytes", "group__edma.html#a6f4c2ec17c05de3741d67447f784f721", null ],
      [ "majorLoopCounts", "group__edma.html#accd14b645237edae7fa51c5db6aa6998", null ]
    ] ],
    [ "edma_channel_Preemption_config_t", "group__edma.html#structedma__channel__Preemption__config__t", [
      [ "enableChannelPreemption", "group__edma.html#aa1230352459f3f47b0e396ef7971bbd6", null ],
      [ "enablePreemptAbility", "group__edma.html#ab7329f8b16f7e8bb0283c9305d9902ce", null ],
      [ "channelPriority", "group__edma.html#a38fbcb827c573361d0043d95faca2d8f", null ]
    ] ],
    [ "edma_minor_offset_config_t", "group__edma.html#structedma__minor__offset__config__t", [
      [ "enableSrcMinorOffset", "group__edma.html#aa2b34fbdc053b7f2f3ea476048e9f80f", null ],
      [ "enableDestMinorOffset", "group__edma.html#a5a2ce555e51bc7694fec6443c191fb5b", null ],
      [ "minorOffset", "group__edma.html#aff7bae6e4e019c2b49508bbfec6cd1ea", null ]
    ] ],
    [ "edma_tcd_t", "group__edma.html#structedma__tcd__t", [
      [ "SADDR", "group__edma.html#a0390d1bdd79814503542ca534da58e90", null ],
      [ "SOFF", "group__edma.html#a28284a4d47a0b15aa5eabc67888f9a2a", null ],
      [ "ATTR", "group__edma.html#a4ac302b14c968761b4bd8bc4e620d9f6", null ],
      [ "NBYTES", "group__edma.html#ada2a3af3cbf20ed38a3669c963d49f7d", null ],
      [ "SLAST", "group__edma.html#a95d71d585f55cc4c5565df98c1941be0", null ],
      [ "DADDR", "group__edma.html#af499a2c9e1a20435bebad40224fa577f", null ],
      [ "DOFF", "group__edma.html#a7f90a8871ce94801ae7bc3ed9c94ef29", null ],
      [ "CITER", "group__edma.html#a96f0c927b263c679c4463c74830968c1", null ],
      [ "DLAST_SGA", "group__edma.html#a892f3dec0f15e33b64f9a966416e9ca6", null ],
      [ "CSR", "group__edma.html#aa49f8458af67a904d9f5dae1dc829a10", null ],
      [ "BITER", "group__edma.html#a4c5331d08a6b43c9ebc15d41c5734140", null ]
    ] ],
    [ "edma_handle_t", "group__edma.html#structedma__handle__t", [
      [ "callback", "group__edma.html#a2103986f2733a5b6ce42b5983eabcb11", null ],
      [ "userData", "group__edma.html#a6af5d18677d40167da0d0219cb3bed01", null ],
      [ "base", "group__edma.html#aac2e55c398c06eb64a7cd00b0d5dc6e3", null ],
      [ "tcdPool", "group__edma.html#a04740b740ff76e5d1301a069509a7588", null ],
      [ "channel", "group__edma.html#ada5950638afd0310331d32760695089f", null ],
      [ "header", "group__edma.html#a5af4b292d3fbfa8026530ffdf9949633", null ],
      [ "tail", "group__edma.html#a86059d052b3d4fff045e21120b9d28a7", null ],
      [ "tcdUsed", "group__edma.html#ad13ee25dd17eed61d772b88fda12badc", null ],
      [ "tcdSize", "group__edma.html#a1e1640f38c69ed7cf38ef12615e341f0", null ],
      [ "flags", "group__edma.html#a3be13f114e3b653751645b65972fad2f", null ]
    ] ],
    [ "FSL_EDMA_DRIVER_VERSION", "group__edma.html#ga5f0841e9527b371724ef4418e6807643", null ],
    [ "DMA_DCHPRI_INDEX", "group__edma.html#ga6f2ecddbfb5e68cd1c9243dc141ec275", null ],
    [ "DMA_DCHPRIn", "group__edma.html#gaf7267caf10c486fd64c0ac40d0bdc2d4", null ],
    [ "edma_callback", "group__edma.html#ga9ee3a34d12fbb39bc972f62ba6357022", null ],
    [ "edma_transfer_size_t", "group__edma.html#gafeb85400b3b87188983f5d62e9e26cb6", [
      [ "kEDMA_TransferSize1Bytes", "group__edma.html#ggafeb85400b3b87188983f5d62e9e26cb6acb4e50cd0e23c0d36edf958be77c8dc2", null ],
      [ "kEDMA_TransferSize2Bytes", "group__edma.html#ggafeb85400b3b87188983f5d62e9e26cb6a589480546c8db2d1372e62a7946fbb2c", null ],
      [ "kEDMA_TransferSize4Bytes", "group__edma.html#ggafeb85400b3b87188983f5d62e9e26cb6a4d91559541642b997418406ec927c454", null ],
      [ "kEDMA_TransferSize16Bytes", "group__edma.html#ggafeb85400b3b87188983f5d62e9e26cb6a0d4cdfd536f2985eea3e8111eecd3c43", null ],
      [ "kEDMA_TransferSize32Bytes", "group__edma.html#ggafeb85400b3b87188983f5d62e9e26cb6ad7e2421e513fc84a29cd20ab47409229", null ]
    ] ],
    [ "edma_modulo_t", "group__edma.html#ga13ac7c9e76c11d3dce06f8976d9e4dd7", [
      [ "kEDMA_ModuloDisable", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ab77c38c19ddcc44212b258bdafe2f207", null ],
      [ "kEDMA_Modulo2bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7af7cbe0618a06406e5473ec1aa11195a0", null ],
      [ "kEDMA_Modulo4bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a2eaf98fea83570be353ff21fde4b8d53", null ],
      [ "kEDMA_Modulo8bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a99fad23e0502470cddec1391edc483e2", null ],
      [ "kEDMA_Modulo16bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7abd6ec81a3b0822ea6c3a7c77215e85a8", null ],
      [ "kEDMA_Modulo32bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7acd0d2322a93a86bb7bb1160217184569", null ],
      [ "kEDMA_Modulo64bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7af60e65e2fdc306df458cabaa77c0a62c", null ],
      [ "kEDMA_Modulo128bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ac5b734f88d8fbe08c19f4b881e643ebd", null ],
      [ "kEDMA_Modulo256bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ab6354112d539cb71083057f72a43f282", null ],
      [ "kEDMA_Modulo512bytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a56d31f1fa472122b9edf4d8c8d437359", null ],
      [ "kEDMA_Modulo1Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a7b85b92e30afea2d7d2eb11e40751496", null ],
      [ "kEDMA_Modulo2Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7acd26e0c0dc1a6518dca27c0a418df484", null ],
      [ "kEDMA_Modulo4Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ae9f8fd54c7f183214653a750775b1e1c", null ],
      [ "kEDMA_Modulo8Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a568ad80f68673d4f57362dc48701aec6", null ],
      [ "kEDMA_Modulo16Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a6e8595a1168272eab8923212c1cabaee", null ],
      [ "kEDMA_Modulo32Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7af12cea48af625688f7d3a6e9e2d19d56", null ],
      [ "kEDMA_Modulo64Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7aab39052aeb4a70843c6ddd61b94f95a0", null ],
      [ "kEDMA_Modulo128Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7afb80c06c8d24882fdeb592a37673e499", null ],
      [ "kEDMA_Modulo256Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ae1c82fe430bd6a43cd8bfca46671cca1", null ],
      [ "kEDMA_Modulo512Kbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7aff7dbf518027bc1d2a84a4dcfe7f0adc", null ],
      [ "kEDMA_Modulo1Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a48ff619715bb526b6d917d6b37686b8a", null ],
      [ "kEDMA_Modulo2Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a5c2909e6956a01efc28bb70a73ddb9f5", null ],
      [ "kEDMA_Modulo4Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a4b07b0456e0aadbde3a32790e423f4d7", null ],
      [ "kEDMA_Modulo8Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ad4f068091510d3fc90b8a21bd2492a38", null ],
      [ "kEDMA_Modulo16Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a3ff219951928d6e40f658f612f9106c0", null ],
      [ "kEDMA_Modulo32Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ade7587c87a42242eb0e47a1dbac5f686", null ],
      [ "kEDMA_Modulo64Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7aedc3a67726be1cdac9385a37556c7056", null ],
      [ "kEDMA_Modulo128Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a0f2c2ca6e26fcf1edefe6bd091504041", null ],
      [ "kEDMA_Modulo256Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a50818bce765be0d7ccfac7490242c119", null ],
      [ "kEDMA_Modulo512Mbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a2289cd131c9052e9ab097abbff3499e7", null ],
      [ "kEDMA_Modulo1Gbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7a22c8078316841b5cc5886d506f95a8e3", null ],
      [ "kEDMA_Modulo2Gbytes", "group__edma.html#gga13ac7c9e76c11d3dce06f8976d9e4dd7ab4a779add96a309505f06a540d75340f", null ]
    ] ],
    [ "edma_bandwidth_t", "group__edma.html#ga77dde4bf7218f5dff3f5eeeccd565d0f", [
      [ "kEDMA_BandwidthStallNone", "group__edma.html#gga77dde4bf7218f5dff3f5eeeccd565d0faeb09bbf3022f40b276ab9b94035ef308", null ],
      [ "kEDMA_BandwidthStall4Cycle", "group__edma.html#gga77dde4bf7218f5dff3f5eeeccd565d0fa443b7698b1950201d47d97de1b643f3c", null ],
      [ "kEDMA_BandwidthStall8Cycle", "group__edma.html#gga77dde4bf7218f5dff3f5eeeccd565d0fac21c278bddfbadae35d53cc565bca9d9", null ]
    ] ],
    [ "edma_channel_link_type_t", "group__edma.html#ga9b736ab8d1dd10d8a277712904b29c91", [
      [ "kEDMA_LinkNone", "group__edma.html#gga9b736ab8d1dd10d8a277712904b29c91aba8b1349b47c8e99c950c179b5548caa", null ],
      [ "kEDMA_MinorLink", "group__edma.html#gga9b736ab8d1dd10d8a277712904b29c91a804db702dd385d11a01dd512f3e1606c", null ],
      [ "kEDMA_MajorLink", "group__edma.html#gga9b736ab8d1dd10d8a277712904b29c91ab9798ac8a18b9632a7d3fabf0bd76881", null ]
    ] ],
    [ "_edma_channel_status_flags", "group__edma.html#ga53dca833c884e3d5841aeaf2157f55cb", [
      [ "kEDMA_DoneFlag", "group__edma.html#gga53dca833c884e3d5841aeaf2157f55cba3fc49e0e9df4c15438fac350d2d7da56", null ],
      [ "kEDMA_ErrorFlag", "group__edma.html#gga53dca833c884e3d5841aeaf2157f55cba2c5dd54b1cb8bd4917b99a914c7bdc84", null ],
      [ "kEDMA_InterruptFlag", "group__edma.html#gga53dca833c884e3d5841aeaf2157f55cbafca58961c7da506e2f1c05451d16f4d9", null ]
    ] ],
    [ "_edma_error_status_flags", "group__edma.html#gafad1024b02944dae6bba164e3c9bd564", [
      [ "kEDMA_DestinationBusErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a54ca64713f21fd2337d165b273d6f680", null ],
      [ "kEDMA_SourceBusErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a5eb8315759ff492642e8fde45cd3d244", null ],
      [ "kEDMA_ScatterGatherErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a9aeb6aad3c245959ab91944bc0136479", null ],
      [ "kEDMA_NbytesErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564acc8bc58b1704ba1f4f4ee1533f69c98e", null ],
      [ "kEDMA_DestinationOffsetErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564aa53400970fa05f5d2790f20338aa6d06", null ],
      [ "kEDMA_DestinationAddressErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564ae516e9e9db0a946f1565e1c2e3175574", null ],
      [ "kEDMA_SourceOffsetErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564ad611243e3bd0baed42ed2343e5e575ac", null ],
      [ "kEDMA_SourceAddressErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a4c0642a49305653638e275415320f0f0", null ],
      [ "kEDMA_ErrorChannelFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a2cc6d4262814dc42f05843199e9540c1", null ],
      [ "kEDMA_ChannelPriorityErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a6f919249e70bf24808d10ff0aaeedbae", null ],
      [ "kEDMA_TransferCanceledFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a1c6f9d050df7f2f0aa945b5f1c46e230", null ],
      [ "kEDMA_GroupPriorityErrorFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564a24c15f950626ea2d506cf48cdde2aa9e", null ],
      [ "kEDMA_ValidFlag", "group__edma.html#ggafad1024b02944dae6bba164e3c9bd564ab930c63068a6d7ee6ccb21df993bd48f", null ]
    ] ],
    [ "edma_interrupt_enable_t", "group__edma.html#ga345805161c8c8ca55c0866085e3d3f76", [
      [ "kEDMA_ErrorInterruptEnable", "group__edma.html#gga345805161c8c8ca55c0866085e3d3f76ab2be76dc7af93bec6801d76376f924c0", null ],
      [ "kEDMA_MajorInterruptEnable", "group__edma.html#gga345805161c8c8ca55c0866085e3d3f76a19c5998906a159df3204e818033a3c0e", null ],
      [ "kEDMA_HalfInterruptEnable", "group__edma.html#gga345805161c8c8ca55c0866085e3d3f76a2f1573636dcd4a54d9189bdee4cf39d0", null ]
    ] ],
    [ "edma_transfer_type_t", "group__edma.html#ga7803399034b374663f76a589da7d8419", [
      [ "kEDMA_MemoryToMemory", "group__edma.html#gga7803399034b374663f76a589da7d8419aba1ccd03368799d9752bd6001f5373a5", null ],
      [ "kEDMA_PeripheralToMemory", "group__edma.html#gga7803399034b374663f76a589da7d8419a1041287c7dc311d81017f529a51734e6", null ],
      [ "kEDMA_MemoryToPeripheral", "group__edma.html#gga7803399034b374663f76a589da7d8419a172d3e1f201639f3157563f4a1a275bf", null ]
    ] ],
    [ "_edma_transfer_status", "group__edma.html#ga0dfe704c01e3565723b4a252c4aede11", [
      [ "kStatus_EDMA_QueueFull", "group__edma.html#gga0dfe704c01e3565723b4a252c4aede11a6d33d9a7019b18917669f16d51085b32", null ],
      [ "kStatus_EDMA_Busy", "group__edma.html#gga0dfe704c01e3565723b4a252c4aede11a96aa3062c73a9f439f63c0ed24f09c07", null ]
    ] ],
    [ "EDMA_Init", "group__edma.html#gaf7588eb4b54499f0f55c698bd98bc1bb", null ],
    [ "EDMA_Deinit", "group__edma.html#ga29aa2b1f72c154c12305d6615845618c", null ],
    [ "EDMA_GetDefaultConfig", "group__edma.html#ga9851dc5addd6a1fc557bfdb625aa5c19", null ],
    [ "EDMA_ResetChannel", "group__edma.html#gaecea06e22455415332bbc342c309cb6b", null ],
    [ "EDMA_SetTransferConfig", "group__edma.html#gaad0c5872dda63e558ee6c62f9bc5eaa8", null ],
    [ "EDMA_SetMinorOffsetConfig", "group__edma.html#gae77bdff6263bed3a02291efb8f1146f0", null ],
    [ "EDMA_SetChannelPreemptionConfig", "group__edma.html#ga01cfc161ccda5ca8bd86083bec5d0657", null ],
    [ "EDMA_SetChannelLink", "group__edma.html#ga7d0f2eac212bad0a1998b05d34a65619", null ],
    [ "EDMA_SetBandWidth", "group__edma.html#gaf2997a300751b52e3c2e699e3f2296f2", null ],
    [ "EDMA_SetModulo", "group__edma.html#gaa3f4855fe92ed80276487771b9bd2705", null ],
    [ "EDMA_EnableAsyncRequest", "group__edma.html#ga0e5cbacd0f64515239695b9f94bb78a4", null ],
    [ "EDMA_EnableAutoStopRequest", "group__edma.html#gac3ef15106efff13ea6a25441fc228349", null ],
    [ "EDMA_EnableChannelInterrupts", "group__edma.html#ga15df898b3b420958f51c4df22dc85b98", null ],
    [ "EDMA_DisableChannelInterrupts", "group__edma.html#ga251561e70531dfcea586b5f1fff9c916", null ],
    [ "EDMA_TcdReset", "group__edma.html#ga3c6239d1c1cd5483fa9b390f568e3066", null ],
    [ "EDMA_TcdSetTransferConfig", "group__edma.html#gad7efa07faa29e3acf456fc1cffb3f9d5", null ],
    [ "EDMA_TcdSetMinorOffsetConfig", "group__edma.html#ga5409f4a24baec461a186df10fe1f8c52", null ],
    [ "EDMA_TcdSetChannelLink", "group__edma.html#gab8ab8f65a2f29d7683fede1d3b239655", null ],
    [ "EDMA_TcdSetBandWidth", "group__edma.html#ga7357cc963fb15ce336ea8fb78f3475a7", null ],
    [ "EDMA_TcdSetModulo", "group__edma.html#ga998211b8fa494160251f2bdfae2d67b4", null ],
    [ "EDMA_TcdEnableAutoStopRequest", "group__edma.html#gabc58ab357e8425a3211048a77ca5ed82", null ],
    [ "EDMA_TcdEnableInterrupts", "group__edma.html#gaff194ee32f2848aa721f8d65f4329fce", null ],
    [ "EDMA_TcdDisableInterrupts", "group__edma.html#ga1dad41c69a12e8abb772f60c66d9f162", null ],
    [ "EDMA_EnableChannelRequest", "group__edma.html#gaabbec6b59a4313df50af39872743deaf", null ],
    [ "EDMA_DisableChannelRequest", "group__edma.html#ga44708108a447777f25e322063df70c95", null ],
    [ "EDMA_TriggerChannelStart", "group__edma.html#ga38aa18611518af3211f23044527d6992", null ],
    [ "EDMA_GetRemainingMajorLoopCount", "group__edma.html#ga097a1bad709b591528fc967867e98d14", null ],
    [ "EDMA_GetErrorStatusFlags", "group__edma.html#ga2416059ab1bd9c51df50bf78f0f98221", null ],
    [ "EDMA_GetChannelStatusFlags", "group__edma.html#ga6e33fe1b55eb7296b1c2cb440c63bf0e", null ],
    [ "EDMA_ClearChannelStatusFlags", "group__edma.html#ga4575eda0bdf9bbec225cdb322bfadb97", null ],
    [ "EDMA_CreateHandle", "group__edma.html#gae71842684e693908395784e8b7f7ef55", null ],
    [ "EDMA_InstallTCDMemory", "group__edma.html#ga61e4c8c8c4292918fe976a9071fa68e2", null ],
    [ "EDMA_SetCallback", "group__edma.html#ga945ae6f5db8b32c9b39ec0954073d65d", null ],
    [ "EDMA_PrepareTransfer", "group__edma.html#ga9ae2d264213737df083b4a7089f826d8", null ],
    [ "EDMA_SubmitTransfer", "group__edma.html#ga8a78ca4c4c941f0ba5fa60033b81b61b", null ],
    [ "EDMA_StartTransfer", "group__edma.html#gab4a5570a9a0936f6666ec3c6a619296f", null ],
    [ "EDMA_StopTransfer", "group__edma.html#ga253a133e7834d7cb958911a05acc16b8", null ],
    [ "EDMA_AbortTransfer", "group__edma.html#ga2098cf6995bc79b25c5c9588f1c711e9", null ],
    [ "EDMA_HandleIRQ", "group__edma.html#gaebf4a6a6000c296d3ab795aae77b65a0", null ]
];