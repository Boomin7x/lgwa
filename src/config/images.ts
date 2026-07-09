export const cloudinaryImages = {
    portOfDouala: "photo-1494412574643-ff11b0a5c1c3_jzo6zu",
    doualaSkyline: "photo-1477959858617-67f85cf4f1df_jvjylh",
    cargoShip: "photo-1578575437130-527eed3abbec_frsweb",
    engineeringTeam: "photo-1522071820081-009f0129c71c_luu9re",
    officeCollaboration: "photo-1522202176988-66273c2fd55f_vjc6us",
    codeEditor: "photo-1461749280684-dccba630e2f6_mslow8",
    laptopCode: "photo-1498050108023-c5249f4df085_kxmqaw",
    serverRacks: "photo-1558494949-ef010cbdcc31_bs3hmg",
    analyticsDashboard: "photo-1551288049-bebda4e38f71_riaciy",
    aiTechnology: "photo-1620712943543-bcc4688e7485_wvauxg",
    cosmeticsFlatLay: "photo-1522335789203-aabd1fc54bc9_kpe62s",
    cosmeticsProducts: "photo-1571781926291-c477ebfd024b_nybogq",
    cosmeticsRetail: "photo-1596462502278-27bfdc403348_biinxb",
    cosmeticsWarehouse: "photo-1553413077-190dd305871c_hmrx4n",
    ecommerceCheckout: "photo-1556742049-0cfed4f6a45d_d4l0ot",
    financeDesk: "photo-1554224155-6726b3ff858f_mmf0sw",
    healthcareTech: "photo-1576091160399-112ba8d25d1d_gwcyqt",
    satelliteEarth: "photo-1451187580459-43490279c0fa_yze59f",
    universityCampus: "photo-1523240795612-9a054b0db644_qeqqbm",
    ecommercePlatform: "photo-1563013544-824ae1b704d3_picy9n",
    teamPortraitOne: "photo-1507003211169-0a1dd7228f2d_rka6j1",
    teamPortraitTwo: "photo-1560250097-0b93528c311a_h2qshh",
    teamPortraitThree: "photo-1573496359142-b8d87734a5a2_l9xxrn",
} as const

export type CloudinaryImageId =
    (typeof cloudinaryImages)[keyof typeof cloudinaryImages]
