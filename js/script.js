
const send= document.getElementById("send");



function test(){
    
    
    


    const nama= document.getElementById("nama");
    const namaHasil= document.getElementById("namaHasil");
    let d = new Date(document.getElementById("birthday").value);
    const tanggalHasil= document.getElementById("tanggalHasil");
    var kelamin = document.getElementsByName('kelamin');
    let kelaminHasil= document.getElementById("jenisKelamin");
    const pesan = document.getElementById("pesan");
    const pesanHasil = document.getElementById("pesanPara");
    const namad= document.getElementById("heading");
    var ceker = 0;
    let tanggal = d.getDate();
    let bulan = d.getDate();
    let tahun = d.getFullYear();
    var i;
    
    
    
    //alert("masuk");
    
    for (i=0; i<=kelamin.length; i++){
        if (kelamin[i].checked){
            kelaminHasil.innerText = "Jenis Kelamin : " + kelamin[i].value;
            if (nama.value == "" || tanggal == 0 || pesan.value == ""){
                alert("ada yang kosong");
            } else{
                namaHasil.innerText = "Nama : " + nama.value;
                namad.innerHTML = "Hi " + nama.value;
                tanggalHasil.innerText = "Tanggal Lahir : " + tanggal + "/" + bulan + "/" + tahun;
                pesanHasil.innerText = "Pesan : " + pesan.value;
                
            }
        }
    }
    

    
}


