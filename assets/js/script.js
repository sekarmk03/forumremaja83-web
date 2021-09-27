const members = [
    {
        photo: "assets/img/member-ilham.png",
        name: "Ilcham Safutra",
        position: "Advisor"
    },
    {
        photo: "assets/img/member-farel.png",
        name: "Andi Vernand",
        position: "Head"
    },
    {
        photo: "assets/img/member-bimbim.png",
        name: "Bima Ardana",
        position: "Co-Head"
    },
    {
        photo: "assets/img/sekar.jpg",
        name: "Sekar Madu",
        position: "Secretary"
    },
    {
        photo: "assets/img/member-nida.jpg",
        name: "Hannida Sufansa",
        position: "Co-Secretary"
    },
    {
        photo: "assets/img/member-ina.png",
        name: "Ina Hanisa",
        position: "Treasurer"
    },
    {
        photo: "assets/img/member-dinda.png",
        name: "Alicia Dinda",
        position: "Co-Treasurer"
    },
    {
        photo: "assets/img/member-ardan.jpg",
        name: "Ardan",
        position: "Environment Division"
    },
    {
        photo: "assets/img/member-nana.png",
        name: "Nana",
        position: "Marketing Division"
    },
    {
        photo: "assets/img/member-fany.jpg",
        name: "Fanny",
        position: "Marketing Division"
    }
];

const rowsMember = document.querySelectorAll(".row-member");
let idxA = 0;
for (let row of rowsMember){
    for(let i = 0; i < 5; i++){
        const figure = document.createElement("figure");
        figure.setAttribute("class", "flex-container-column card");
        const img = document.createElement("img");
        img.src = members[idxA].photo;
        figure.appendChild(img);
        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = "<p><strong>" + members[idxA].name + "</strong></p>";
        figcaption.innerHTML += "<p>" + members[idxA].position + "</p>";
        figure.appendChild(figcaption);
        row.appendChild(figure);
        idxA++;
    }
}

const socialActivities = [
    {
        photo: "assets/img/17an.jpg",
        activityName: "Peringatan Hari Kemerdekaan",
        activityDate: "17/08/20"
    },
    {
        photo: "assets/img/banjir.jpg",
        activityName: "Distribusi Bantuan Banjir",
        activityDate: "20/02/21"
    },
    {
        photo: "assets/img/bank-sampah.jpg",
        activityName: "Bank Sampah",
        activityDate: "22/02/21"
    },
    {
        photo: "assets/img/bisnis.jpg",
        activityName: "Membuat Produk",
        activityDate: "06/11/20"
    },
    {
        photo: "assets/img/foto.jpg",
        activityName: "Foto Bersama",
        activityDate: "27/02/21"
    },
    {
        photo: "assets/img/frbn.jpg",
        activityName: "Berbagi Nasi Mingguan",
        activityDate: "01/03/21"
    },
    {
        photo: "assets/img/frbn2.jpg",
        activityName: "Berbagi Nasi Mingguan",
        activityDate: "09/03/21"
    },
    {
        photo: "assets/img/galang-dana.jpg",
        activityName: "Penggalangan Dana Banjir",
        activityDate: "11/02/21"
    },
    {
        photo: "assets/img/kunjungan.jpg",
        activityName: "Kunjungan Rumah Warga",
        activityDate: "05/03/21"
    },
    {
        photo: "assets/img/makan.jpg",
        activityName: "Rapat Bulanan",
        activityDate: "01/04/21"
    },
    {
        photo: "assets/img/otw-banjir.jpg",
        activityName: "Otw Distribusi Bantuan Banjir",
        activityDate: "20/02/21"
    },
    {
        photo: "assets/img/santunan.jpg",
        activityName: "Santunan Anak Yatim",
        activityDate: "14/10/20"
    },
    {
        photo: "assets/img/sumbangan-covid.jpg",
        activityName: "Galang Dana Warga Terdampak Covid",
        activityDate: "05/06/21"
    },
    {
        photo: "assets/img/takjil.jpg",
        activityName: "Berbagi Takjil",
        activityDate: "26/06/21"
    }
];

const rowsActivity = document.querySelectorAll(".row-activity");
for (let row of rowsActivity){
    for (let activity of socialActivities){
        const figure = document.createElement("figure");
        figure.setAttribute("class", "flex-container-column");
        const img = document.createElement("img");
        img.src = activity.photo;
        figure.appendChild(img);
        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = "<h4>" + activity.activityName + "</h4>";
        figcaption.innerHTML += "<p>" + activity.activityDate + "</p>";
        figure.appendChild(figcaption);
        row.appendChild(figure);
    }
}