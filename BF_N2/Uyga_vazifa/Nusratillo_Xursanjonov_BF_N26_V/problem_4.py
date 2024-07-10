'''4-masala. TIMETABLE
Time nomli class yarating va uning property elementlari quyidagilardan iborat:

- Hour(Soati); Minut(Daqiqasi); Sekund(Soniyasi).

TimeTable nomli class Time nomli classdan voris bo`lib keladi va uning property elementlari quyidagilardan iborat:
- Subject(Fan); StartTime(Fanning boshlanish vaqti); Classroom(Auditoriya).

TimeTable classiga tegishli 5ta obyekt yarating va ularni ma`lumotlarini kiriting.
Sizning vazifangiz foydalanuvchi tomonidan Time classining obyekti uchun kiritilgan vaqtda qaysi Fanning boshlanish vaqti o`z vaqtida boshlanishini aniqlang.
Eslatma: Barcha ma`lumotlarni foydalanuvchi kiritishi lozim va algoritmsiz ishlangan misolga past ball qo`yiladi.'''
class Time:
    def __init__(self, hour:int, minut, sekund) -> None:
        self.hour = hour
        self.minut = minut
        self.sekund = sekund

class TimeTable(Time):
    def __init__(self, hour:int, minut, sekund, Sobject, StartTime:int, Classroom) -> None:
        super().__init__(hour, minut, sekund)
        self.sobject = Sobject
        self.startTime = StartTime
        self.classroom = Classroom

        if self.hour == self.startTime:
            return f"""
            Sobject: {self.sobject}
            StartTime: {self.startTime}
            Classroom: {self.classroom}
            """

c = Time(8, 30, 00)
print(c1 = TimeTable(8, 30, 00, 'Matematika', 8, 'Matematika Xonasi'))