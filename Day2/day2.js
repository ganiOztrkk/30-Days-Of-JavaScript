let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let js = 'JavaScript'
let py = 'Phyton'

console.log(js == py)

let lightOn = true
let lightOff = false

console.log(lightOff == lightOff)

let numbers = [1,2,3,4,5,6]
numbers[0] = 9

console.log(numbers[0])

//dizi ve object ilkel olmayan veri türleridir. bu veri türlerinde karşılaştırma değere göre yapılmaz. ilkel olmayan veri türleri aynı özelliklere ve değerlere sahip olsa bile kesinlikle eşit değildirler.

let nums = [1,2,3]
let nums2 = [1,2,3]

console.log('aynı değerlere sahip ilkel olmayan veri karşılaştırması: ' , nums == nums2)

//temel kural ilkel olmayan veri türlerini karşılaştıramıyoruz.

let userOne = {
    name: 'Gani',
    role: 'Programmer',
    country: 'Turkiye'
}
let userTwo = {
    name: 'Gani',
    role: 'Programmer',
    country: 'Turkiye'
}

console.log(userOne == userTwo)

let age = 35
// değişmez değişkenler const ile tanımlanır. yer çekimi gibi, PI sayısı gibi 
const gravity = 9.81
let mass = 72
const PI = 3.14
const boilingPoint = 100
const avarageBodyTemp = 37

console.log(age, gravity, mass, PI, boilingPoint, avarageBodyTemp)

// Matematik nesnesi (Math object)
//JS Math objesi sayılar ile çalışmamızı sağlar

const piValue = Math.PI

console.log(piValue)

console.log(Math.round(piValue))
console.log(Math.round(9.81))
console.log(Math.floor(piValue))
console.log(Math.ceil(piValue))

console.log(Math.min(4,5,2,5,6))
console.log(Math.max(343,2,5,6,2,3))

const randNumber = Math.random()
console.log(randNumber)

const random = Math.floor(Math.random()* 10)
console.log(random)

//mutlak deger 
console.log(Math.abs(-21))

//karekok
console.log(Math.sqrt(100))
console.log(Math.sqrt(2))

//üs
console.log(Math.pow(3,3))

//iki veya daha fazla string ifadeyi baglama birleştirme işlemi

let firstName = 'Gani'
let lastName = 'Ozturk'

let fullName = firstName + ' ' + lastName
console.log(fullName)

//string ifadeler tek bir karakterden, bir cümleden yada bir sayfa dolusu paragraftan oluşabilir. String bir ifadenin uzunluğu çok büyükse tek bir satıra sığmayabilir. String'in bir sonraki satırda devam edeceğini belirtmek için satır sonu olarak belirlediğiniz yerin sonuna ters eğik çizgi kullanabilirsiniz (\)

const paragraph = 'My name is Asabeneh. I live in Finland, Helsinki.I am a teacher and I love teaching.\n I teach HTML, CSS, JavaScript, React, Redux, Node.js, PhytoN.\nI was thinking to expand my teaching and to reach...'

console.log(paragraph)

// \n: yeni satır ifadesi -- \t tab, 8 boşluk -- \' tek tırnak \" cift tırnak

let a = 5
let b = 2
console.log(`the sum of ${a} and ${b} is ${a+b}`) // string ifade icinde degisken kullanmak istersek ters tırnak kullanarak ${degisken} yazıyoruz.

let firstName2 = 'gani'
let lastName2 = 'ozturk'
let country2 = 'turkiye'
let language = 'javascript'
let job = 'developer'
let personInfo = `I am ${firstName2}. I am ${age}. I live in ${country2}.`
console.log(personInfo)


let q = 4
let g = 10
console.log(`${q} is greater then ${g}: ${q > g}`)


console.log(personInfo.length)


let sample = 'ittihat ve terakki'
console.log(sample.substring(4,7))
let sample2 = 'ittihat ve terakki'
console.log(sample.substr(4,12))

let ornekCumle = 'suan yazmakta oldugum cumlenin kac kelimeden oldugunu sayarak degil programlamanın nimetlerinden faydalanarak yani string metot olan split metodunu kullanarak bulmaya çalışacağım.'

let kelimeSayisi = ornekCumle.split(' ')
console.log(kelimeSayisi.length)

//string to int işlemi 

let stringNumber = '55'

let convertedNumber = +stringNumber
console.log(typeof(convertedNumber))

