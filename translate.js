
let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str = str.trim()
str = str.toUpperCase()
str = str.split(' ')


for(i = 0; i < str.length; ++i){
    console.log(`mot: ${str[i]}`)
}

