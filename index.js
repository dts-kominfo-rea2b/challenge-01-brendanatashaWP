// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const favColor = [
    { key: 'YELLOW', value: 'Yellow' },
    { key: 'PINK', value: 'Pink' },
    { key: 'WHITE', value: 'White' },
    { key: 'PURPLE', value: 'Purple' },
    { key: 'BLUE', value: 'Blue' },
    { key: 'BLACK', value: 'Black' },
    { key: 'GREY', value: 'Grey' }
]
const favResto = [
    { key: 'BENTO', value: 'Bento' },
    { key: 'SUSHI', value: 'Sushi' },
    { key: 'EGGY', value: 'Eggy' },
    { key: 'PANCAKE', value: 'Pancake' },
    { key: 'TEMPURA', value: 'Pancake' },
    { key: 'PADANG', value: 'Pancake' },
    { key: 'GEPREK', value: 'Pancake' },
    { key: 'KATSU', value: 'Pancake' },
    { key: 'TTEOK', value: 'Pancake' }
]

const firstUserProfile = {
    name: 'Monica',
    gender: 'Female',
    age: '17',
    email: 'monica@dingdong.com'
}
const firstUserFavColor = ['YELLOW', 'PINK', 'WHITE', 'PURPLE']
const firstUserFavResto = ['BENTO', 'SUSHI', 'PANCAKE', 'EGGY', 'TEMPURA', 'PADANG', 'TTEOK']
const firstUserEdu = [
    {
        level: 'SD',
        name: 'SD 01',
        city: 'Jakarta',
        graduate: '2016'
    },
    {
        level: 'SMP',
        name: 'SMP 02',
        city: 'Jakarta',
        graduate: '2019'
    },
    {
        level: 'SMA',
        name: 'SMA 03',
        city: 'Tangerang',
        graduate: ''
    }
]

const secondUserProfile = {
    name: 'Wendy',
    gender: 'Male',
    age: '23',
    email: 'wendy@dingdong.com'
}
const secondUserFavColor = ['BLUE', 'BLACK', 'GREY']
const secondUserFavResto = ['TEMPURA', 'BENTO', 'SUSHI', 'PANCAKE', 'PADANG', 'KATSU', 'GEPREK', 'EGGY']
const secondUserEdu = [
    {
        level: 'SD',
        name: 'SD 02',
        city: 'Jakarta',
        graduate: '2010'
    },
    {
        level: 'SMP',
        name: 'SMP 03',
        city: 'Bogor',
        graduate: '2013'
    },
    {
        level: 'SMA',
        name: 'SMA 01',
        city: 'Surabaya',
        graduate: '2016'
    },
    {
        level: 'UNI',
        name: 'Universitas Maju',
        city: 'Tangerang',
        graduate: ''
    }
]

const firstUser = {
    ...firstUserProfile,
    favoriteColor: constructFavColor('1'),
    isHavePet: 1,
    education: firstUserEdu,
    favoriteRestaurant: constructFavResto('1')
};
const secondUser = {
    ...secondUserProfile,
    favoriteColor: constructFavColor('2'),
    isHavePet: 1,
    education: secondUserEdu,
    favoriteRestaurant: constructFavResto('2')

};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

function constructFavColor (user) {
    let result = []
    let objFind = {}
    let userFavColor = user === '1' ? firstUserFavColor : secondUserFavColor
    userFavColor.forEach(color => {
        objFind = favColor.find(data => data.key === color)
        result.push(objFind)
    });
    return result
}

function constructFavResto (user) {
    let result = []
    let objFind = {}
    let userFavResto = user === '1' ? firstUserFavResto : secondUserFavResto
    userFavResto.forEach(resto => {
        objFind = favResto.find(data => data.key === resto)
        result.push(objFind)
    });
    return result
}

module.exports = {
    users
};