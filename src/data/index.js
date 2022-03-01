const JAVASCRIPT = {
  url: 'https://www.svgrepo.com/show/349419/javascript.svg',
  alt: 'JavaScript',
};

const CSS = {
  url: 'https://www.svgrepo.com/show/303263/css3-logo.svg',
  alt: 'Css'
};

const REACT = {
  url: 'https://www.svgrepo.com/show/354259/react.svg',
  alt: 'React',
};

const REDUX = {
  url: 'https://www.svgrepo.com/show/354274/redux.svg',
  alt: 'Redux'
}

const HTML = {
  url: 'https://www.svgrepo.com/show/303205/html-5-logo.svg',
  alt: 'Html',
};

const JEST = {
  url: 'https://www.svgrepo.com/show/353930/jest.svg',
  alt: 'Jest',
}

const RTL = {
  url: 'https://testing-library.com/img/octopus-128x128.png',
  alt: 'React Testing Library'
}

const projects = [
  {
    name: 'Star Wars',
    urlImag: 'https://lh3.googleusercontent.com/AwOcxFgieSU0U0Hr4noaDzy-NgJDQwYDsG3ifQSUxKg09q6iTIkVfViNEO-4-MW85DnZfpIqThyoXGEdValzO8UUEuASvIr5QcSEBcdtJOF3JnNsOONfVIZhmfFcjnrr71I5gniXV4T3VgsVz_S-5ZsSmL__mwAquEGmEwqZxP0AwXS6HGzrBq-Dz9o1P_zMlmBkwUr4n1s3opU4g99bOqL_M-MNCmzJ7hQveCZHSTvX73Tw1d6abOJqfiXsWobLhxqUo3mdwElMvkAfoIg8b4M-n_KRu0fohGcRgXRMXeotEEnGs-MGEO-WTJgvF4LPnW5E_WeORuBjKPVb2u_n2i64PggyZag6jv-NNsmxQb-Q_MXyWJPlYTUla5skSXwr91e5HTC0o8KjVChBddtgV_WTGDgAlBI6g0Phm_jmy8wRBfO3POOBZ46B6bKJef8O6bDJDj3PqcktcMcW-SM7NezXp5Gz9npJMkX4NF2t-uvySfneEmNkBQ57Cyx7LikvAvZEdlfy3xJsJtTzVveNOdnvEGAVKHPzM0fhMp4NdBcrQzEBJDU2It9csP_F8QHtNWHO-omyxVDOljhYFLsUvD0pq8dTC85rZP46z1jt1hgStxJq_DQLHqv5wg9M4-DTZ1rElV2BrqFzUduf1r5TfTGrlzai-9vfSKrp4rd5S0GfLlFhuQALadqqNTThSx1-7rYzkwvQX3aTtIOS=w960-h471-no?authuser=1',
    urlGitHub: 'https://github.com/matheus-ferreira02/Projeto-StarWars',
    urlSite: 'https://projeto-star-wars-alpha.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, CSS],
  },
  {
    name: 'Generate Password',
    urlImag: 'https://lh3.googleusercontent.com/mc3MkRwZKdflZGNZP5rQegwcD1Xx9Bg3DIwSHGfnS7lm6gebgaT4dziTlb8H-VaGVdomUxcNgZpn_p0B2DiGSv-y7vduFR967xp1w6s7Y_OBOteZtQd5gZ7LTg8SzY3yZFaJi22mPjQNgMicXvWGvWDuweiYayxS9q89MhZY_s4H6x2QWiDhPPy3U7DztwNwGTKe9vo1fZPCF9YD6MlZFPAGo62JL_qNM-T3QslmQ5g2-14vWxJ_0kX3xWmaAA0YZVmGYq90HJZ3s19O15Nc6AwFjG83A1LKGib0xE3ugaPppbpZdXYzD0tV4S_iVhF1Z21QDKZkaIdD4hz_7a4Mej8MP2RyaEa-S6zRQe4bERxwSN_Sj0dJ-pW4nTlzbHn2Nmc3po_VAA6a2lmEC5bKvF9CTwXYoLsKlvzkg8GfiAAdw0PjO9EJb7Q9ngEYWF1rkMdKZVnM0zKtHxN3xOETBtejfmDE2Xrqa7gD921Q5tYgv-Uw4KSiJ_ZzkAdYmAGysnZseRdWn8hDYWXGT0z5hZdwYt6Lml_kWLAtTYY84PhUdcnD0mdHALuf5Ou1YydWUmv3u-oQFZsmsa9Z2PCtVtu4zEHolN_olvcZGcyybbb5VdRaVqmIVF3fAflTyo0D-7EeGvtSDIJdic6hUjcTDseZLb_r34ThiPlK6GAdq4BWNhKSmE916HelSGtfvZn_svjgtXLmR-JS1ywV=w960-h471-no?authuser=1',
    urlGitHub: 'https://github.com/matheus-ferreira02/Project-Password-Generator',
    urlSite: 'https://project-password-generator.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, RTL, JEST, CSS],
  },
  {
    name: 'Card Trunfo',
    urlImag: 'https://lh3.googleusercontent.com/G44QT-1jQCQRTF19Ax5rHU6h5yQcr9h6J0v8qGvfW-3AKy2sM6760TK9s8UqEbu9iuMYAVv5tWQvCgPsjwUshbRnzlLPTq-kVSDPdXeI1xpZVjbEVmU8I8euLxPVzMtxwg6NwX6RgZJyjGpcm8CdBP_Hzj_R1oECRTcMtFOVfbHde9r_XRACwWE0XCGxco25RYF0e07mWBz42dSSzLlM3WejDAwx9dt68zRszBFuJqpq7Yz5hvdkePJEPFuPp5pxfZSL2tk46iN0A_F7HkiLHifmzOtxKZdATfn-eGTFIdzm0dRc3qLqojK6MGBrRm1J_rP2thHlme_Yj7j89oogFfkVJXvCCsUSGMSCUaNqSBD92fyTTt3m_qQt0tutDStefeN3fCzhu7x2ScPhqhT64alsPlf-cox_-YaKSqGu_AYp_tFdIm6fhoaF3nFhcXeMUDvMqWD3xg2nmdeMoz6HEKEW0RRgJ8y8a-P4ACNX7_e5crBdGKlzTldkvh2MZgYzeCUEjKHc5zFUbap32BaCSKi_JQmymsIpvcEgrd6q5KmkqP-egdawofj3zxSjYh4iFHE_tBmFmElGXeBUTOCXaULWI86fUcrUHnWVfngf00Kb538LjygTa8n9tG3AkTcinD7okGkotJLz6S689U9qyDwfTBEU8K5qHcS40Th6Fk3YAygY4Dx_tPzkxH9ZzS3eqSatJMIa1mCZcdwF=w960-h474-no?authuser=1',
    urlGitHub: 'https://github.com/matheus-ferreira02/Projeto-Tryunfo',
    urlSite: 'https://projeto-tryunfo.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, CSS]
  },
  {
    name: 'TrybeTunes',
    urlImag: 'https://lh3.googleusercontent.com/tyRWeEmhvX8H1r_s3jyghK4YnoBzul5uC4YLlLOd-xfeIJ9hH8Aujji4zrjtarAkbZBXw686rPM9-JwLlW_nSvgWT11qNyThCLr_EuUNcFwIVdjk4tmidTlgwPrmjQ8U2XMpzetqNE-Ich3KnXlVJkQp6kwr17LAK1crwPAf-oNy7dLFaDZriJBVtuNUNcs_0rxAIjfARESEJjVVRm6A2c8TuDV6bCXC4szkO-LagZTb6FQytcDwwiv8BiO-70agdokkdF84gVbvf4lUIrZcimo0yjGFF6BYK_Tiikd64N7WL7wPqccTde93TJ_dq8aeS0G79e9yG-4apv6YVdAvxMmMqFKyM6ziAKgqtrPol-X1qaf70ZNWDSq4UDFqmxPzEq-s-lvqkzpFT24ry4jZYjx7inc40mhDkRa1ioFCrstVrvOr6v28qHjMd9bIoMfDaOSuiXyDH__g7MBS7WdXSYD5PR0wlGZ9YuxYOv3jEE8AazU9u8JpOBJtp_lItMyn7ltbE1eVV4lhh4h-uJNg1vwiNgrNBN1fL9aDY62k5oVaKGQM3_rWOGt6ewoNAMu8zghqMk-keMD3m74eEttcfbO2zljF2S2aar2cddKsO92QyCJbPrhFr62DDCrXtr854vdnKyUokTsw72cH9_4wrLzFkocAW-QZ7VVluB8BvjIDfjbTSwQLPyW-TiAtGheCh0kEXRGI6Kla9lXY=w960-h475-no?authuser=1',
    urlGitHub: 'https://github.com/matheus-ferreira02/Projeto-Trybetunes',
    urlSite: 'https://projeto-trybetunes.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, CSS]
  },
  {
    name: 'Solar System',
    urlImag: 'https://lh3.googleusercontent.com/DVJLlVSMAVGGXfUOKVo8RF-R-PDrTIz9PrXykXHAKcukY6y1d-UstdR0afgh_D5ODSKB6rfxiAARc7HtdZJ__F4KwblH1THCO2sV8QwnrTIGml3Kpm0nvm9RlW4lLEl7J1oxS9I3aG9YpwNr37aG_adAjpMzB4XYnIWO37eJx9S0GfRlWaySHnCPARzk2ztLm-l4DgNuDEUgarGPFc3ssKdYytgqNmoxrfQGQR4kyE7GuIlgAC5qCcuQNQVRjjVUJCZZMFibwaJDJ8nmrK_jSQw8zE-P843J9z9fRRTeW0xhu-x__HHseQqb2mn_aI10ZEB9PW-C-cMdxvbeyHQC0nTqBSoD9TMp6v6jSf30TvzAYaUVEhKDoz7jW6NR846eQ-YyYTyqT_2GoyDCSjaUPotc3TLpL-EWPU-ehjSBiPHM0z7R7qN9xdwzjQmFglcF6Wam8-QVXBZDdP2KebgwGgWrlNg-F1qHbdjLQYEx_au8rKmJowyVCKcNX3GXxSTssBFdaYpbcdJ_58XleP1THQlkV6tedkx9b8_qhAn3NEs2QIDl1nviaQebXfl-cyOQVYSBCVOqFPvEnn0yQu0hj1ykpOHGSTroY_KbHrkPDfVVWTMsrM9NkTfxq3nbK7VwyjuGCRt-XxeZRPiu5I8iQZ1clC-GXhvP0g9n3KtSL9QQhmPSrxw_2qyQaRr77YMj_pJIyHpl7TObHjco=w452-h224-no?authuser=1',
    urlGitHub: 'https://github.com/matheus-ferreira02/Sistema-Solar',
    urlSite: 'https://matheus-ferreira02.github.io/Sistema-Solar/',
    technologyIcons: [REACT, JAVASCRIPT, CSS]
  },
  {
    name: 'Trybe Wallet',
    urlImag: 'https://lh3.googleusercontent.com/AqLFLGB4KUfSTXV0rxdQv15DSioUAvlb1BT_yFVtL_Vnk_9cPeflafUIK4OYoZa2rqxMYN-oU5Z9EeBHiSKDpPxvedex37FCJPvs60Yf5pVhWMk3nuEcdDnuBDjeLdcRTD7W2Y9tr4HIzc4bbDh3tVa0XCX_tJHJqiaiUwAZO_6yKJfcoUs99bFXNTMah6mlS6eo1egwKs8XZhEkCKujKWVzG0aZN_OKxAQYo1e-QdRc5CBcuQaTx4wvq7vC7__LobE3jQ2h6c88aQl6fFd73UnQP-kwdZBIbqMtFAJgEMQ2FnRywYct7bhsgr4RwocKW3bbGfKuiBsQfbUzE72HW9c18J3oK1wsPDOMO8ZRrIs5CZ0Bj1ywkbKjb6NmgqbtBAZ2TZqN29FGKU87vJoCd0Sov6MCZKkk8dnymEJrgx9IAJU9UFulW9lhkgZkZvivtIBQ-OagqgbFGhRAcSvtXUywWEA97SvSPvw60P6Rmzd2aDvNiyAPIRgrWhc2G06BLqilLYIVHWyB3_2ofU20Z1dtANir-S6_zFR5iGPJuy8Og8rsIWwiZtpw9Ho3WzVHA9ea33s8f0bCBQRMyTrKZkZ98WVPm3cavP-f9OVgCdFbmcstN7K26ROTOE6JyRBoE02RHveLBzdNdoHC2pGmB78EKL0PTjQenmnVWtMiFCiyR4A5H_lDSIAQ3_OlH6GjVFw2ATy4RDYleI5r=w960-h470-no?authuser=1',
    urlGitHub: 'https://github.com/matheus-ferreira02/Project-TrybeWallet',
    urlSite: 'https://project-trybe-wallet-five.vercel.app/',
    technologyIcons: [REACT, REDUX, JAVASCRIPT, CSS],
  },
  {
    name: 'Pixels Art',
    urlImag: 'https://lh3.googleusercontent.com/dZpxhWYK-uDeO35_OUjNRUGZW3E6YPGzQpdlJ-jxU3SmnLTVCubqSkRhkVFczoirAKSJGj0isjkKCictgbbBBYcZuNo4RoyFIk8H9kuR-iHagNgt0dM17tMatvhFJY3F_n3vlje2zIo1BW__CAh9Q34eB6ZkMy_8Uen5PE3QCR4lbLVS9f-eQBZbw79_wrHYogBDcs1uilFm--0s59-8jEER2W7_1jx0UX40pGon5ThIX89Z0xxwPScz-3e64Yv7G_iaMcuF459yyvtdFhNezOjZKPsC_TyxMV85_3jw_VEafCxkJtYmAqv_cD2t4BZgEuk1Iei3h9iTHXECePEk7UfaPwOGjtVcN-wsc6YwtGemDUN_Q7cI09Zf6dggPb676v4KP7UqK2A675l8NIOaR_HrADLlFUzJTM0YtWcnfVArwQHifItbnXrdq3FiMjwNEL4TmjdtTkGlVmjpxGvp1MeCJ6eIfl48LmIK1304MB5RxYzHx_PfWBErz1wITu3vyftLxr5SdaN-zZm3asn8wvLEIqUN0UR9OuZxekj61pj6qKHAfxWA16LBDL8BEOGjyAb1jsKZjMf1uKs0a_Ta3-DqKgyJRkGJjQNus_QbDx7b-jI17n9HIYhpZTWUWygd_64jBWlSHY62LeCFOjoP6BM0xc8WBbR0RsGm59YPOXT3ckgGeODpMH4iMlXmpIXLvd6MjAmVORF2Jl0n=w960-h471-no?authuser=1',
    urlGitHub: 'https://github.com/matheus-ferreira02/Pixels-Art',
    urlSite: 'https://matheus-ferreira02.github.io/Pixels-Art/',
    technologyIcons: [HTML, JAVASCRIPT, CSS],
  },
]

export default projects;
