'''3 - masala. MATRIX
Foydalanuvchi N sonini kiritadi va ushbu son orqali NxN matritsa tuzish kerak va ushbu matritsani faylga joylashtirish kerak.

Matritsaning diagonallari 1 sonlaridan va qolganlari esa 0 sonlaridan tashkil topishi kerak.
Eslatma: Barcha ma`lumotlarni foydalanuvchi kiritishi lozim va algoritmsiz ishlangan misolga past ball qo`yiladi.
Input (Kiruvchi ma`lumot)
Output (Faylga yangi yozilgan ma`lumot)
N=1
1
N=3
1  0  1
0  1  0
1  0  1
N=4
1  0  0  1
0  1  1  0
0  1  1  0
1  0  0  1'''

def matrix(n):
    a = n
    for i in range(len(n)):
        for j in range(len(n)):
            if i == n-1 or j == n-1:
                pass
        


n = int(input('N = '))

matrix(n)

# inp: N = 3
# out: 1 0 1
#      0 1 0
#      1 0 1