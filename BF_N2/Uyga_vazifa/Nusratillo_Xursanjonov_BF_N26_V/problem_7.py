'''7-masala. TRAIN
Afrosiyob poyezdi yo`l bo`ylab Nta bekatdan o`tishi kerak (1-boshlang`ich bekat, N-oxirgi bekat hisoblanadi). Ushbu poyezdagi yo`lovchilar ro`yhati berilgan. Bundan tashqari ularni qaysi bekatda kirishi va qaysi bekatda chiqishi ma`lum. Qaysi qatnovlarda(ya`ni qaysi qo`shni stansiyalar orasida) eng ko`p yo`lovchi bo`lgan.
Kiruvchi ma`lumot:
Birinchi qatorda N-bekatlar soni kiritiladi. Ikkinchi qatorda M-yo`lovchilar soni va undan keyingi qatorda esa Mta yo`lovchi haqida ma`lumot quyidagi tartibda kiritilinadi:
Ismi kirish_bekati_soni chiqish_bekati_soni (1dan N+1gacha sonlar)
Chiquvchi ma`lumot:
Sizning vazifangiz poezdda eng ko`p yo`lovchilar bo`lgan qatnovlar ro`yxatini chiqarish kerak. Ushbu ma`lumotda har bir qo`shni bekatlar `-` belgisi bilan ajratilgan bo`lishi kerak.

Eslatma: Barcha ma`lumotlarni foydalanuvchi kiritishi lozim va algoritmsiz ishlangan misolga past ball qo`yiladi.
Input (Kiruvchi ma`lumot)
Output (Chiquvchi ma`lumot)
N=5
M=3
Sanjar 1 5
Baxrom 3 5
Kamola 1 2
1-2
3-4
4-5'''
class Afrosiyob:
    def __init__(self, ismi, kirish_bekati, chiqish_bekati) -> None:
        self.ismi = ismi
        self.kirish_bekati = kirish_bekati
        self.chiqish_bekati = chiqish_bekati
        a = self.kirish_bekati
        b = self.chiqish_bekati
        count = 0
        count1 = 0
        while a < b:
            if self.kirish_bekati == a:
                count+=1
            elif self.chiqish_bekati == b:
                count1+=1
            a+=1
        print(count)

c = Afrosiyob('Sanjar', 1, 5)
c2 = Afrosiyob('Baxrom', 3, 4)
c3 = Afrosiyob('Kamola', 1, 2)