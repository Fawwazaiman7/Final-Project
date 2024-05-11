import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import '@/components/style.css'

export default function Profile() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <table>
    <tbody>
    <tr> 
        <th colspan="31" class="buatJudulTabel">BIODATA KTP</th>
    </tr>
    <tr>
        <td class="buatTabelNama">Nama :</td>
        <td class="buatTabelNama">Muhammad Fawwaz Aiman Muktia</td>
    </tr>
    <tr>
        <td class="buatTabelTTL">TTL :</td>
        <td class="buatTabelTTL">Bekasi, 15 Februari 2005</td>
    </tr>
    <tr> 
        <td class="buatTabelJenisKelamin">Jenis Kelamin :</td>
        <td class="buatTabelJenisKelamin">Laki-Laki</td>
    </tr>
    <tr> 
        <td class="buatTabelAlamat">Alamat :</td>
        <td class="buatTabelAlamat">Bumi Dirgantara Permai Jalan Melati 1 Blok ch no.13 <br /> RT.01/13, Kel. Jatisari, Kec. Jatiasih</td>
    </tr>
    <tr>
        <td class="buatTabelAgama">Agama :</td>
        <td class="buatTabelAgama">Islam</td>
    </tr>
    <tr>
        <td class="buatTabelPekerjaan">Pekerjaan :</td>
        <td class="buatTabelPekerjaan">Mahasiswa</td>
    </tr>
    <tr>
        <td class="buatTabelKewarganegaraan">Kewarnegaraan :</td>
        <td class="buatTabelKewarganegaraan">WNI</td>
    </tr>
    <tr>
        <td class="buatTabelKontak"> Kontak :</td>
        <td class="buatTabelKontak"> 087771110913</td>
    </tr>
    </tbody>
    </table>
    <Link href={'/'}>Home Page</Link>
    </main>
    </>
    )
}
