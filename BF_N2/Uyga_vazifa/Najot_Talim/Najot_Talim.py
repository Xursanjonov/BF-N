import sys

from PyQt6.QtWidgets import QApplication, QWidget, QPushButton, QRadioButton, QVBoxLayout, QHBoxLayout, QLabel

class Button_tun_kun(QPushButton):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setFixedSize(30,30)
        self.setStyleSheet('background: white; border: 1px solid red; border-radius: 15px; font-size: 15px')

class Label(QLabel):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setStyleSheet('color: blue; font-size: 25px')

class QLabel_5(QLabel):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setFixedSize(180,50)
        self.setStyleSheet('border-radius: 10px; color: Blue; font-size: 33px')

class Button_RB(QRadioButton):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setFixedSize(180,50)
        self.setStyleSheet('font-size: 16px')

class Button(QPushButton):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setFixedSize(80,40)
        self.setStyleSheet('background: green; border-radius: 10px; color: black; font-size: 18px')

class Button_red(QPushButton):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setFixedSize(80,40)
        self.setStyleSheet('background: red; border-radius: 10px; color: black; font-size: 18px')

class Button_gold(QPushButton):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setFixedSize(80,40)
        self.setStyleSheet('background: gold; border-radius: 10px; color: black; font-size: 18px')

class QButton(QPushButton):
    def __init__(self,text) -> None:
        super().__init__(text)
        self.setFixedSize(180,50)
        self.setStyleSheet('background: Green; border-radius: 10px; color: white; font-size: 26px')

class Najot_Talim(QWidget):
    def __init__(self) -> None:
        super().__init__()
        self.setFixedSize(450,300)
        
        self.v_box = QVBoxLayout()
        self.h_boxn = QHBoxLayout()
        self.h_box1 = QHBoxLayout()
        self.h_box2 = QHBoxLayout()
        self.h_box3 = QHBoxLayout()
        self.h_box4 = QHBoxLayout()

        self.tun_kun = Button_tun_kun('🌞')

        self.label = QLabel_5('Najot Ta`lim')
        self.label_1 = QLabel('Assalomu Alaykum Najot Ta`limga hush kelibsiz')
        self.label_2 = QLabel('IT ning qaysi yo`nalishini yoqtirasiz ?')

        self.btn_dasturchi = QButton('Dasturlash')
        self.btn_grafik = QButton('Grafik desigen')
        self.btn_marketing = QButton('Marketing')

        self.h_box1.addStretch()
        self.h_box1.addWidget(self.btn_dasturchi)
        self.h_box1.addStretch()
        
        self.h_box2.addWidget(self.btn_marketing)
        self.h_box2.addWidget(self.btn_grafik)

        self.h_boxn.addStretch()
        self.h_boxn.addWidget(self.label)
        self.h_boxn.addStretch()
        self.h_boxn.addWidget(self.tun_kun)

        self.h_box3.addWidget(self.label_1)
        self.h_box3.addStretch()
        self.h_box4.addWidget(self.label_2)
        self.h_box4.addStretch()
        
        self.v_box.addLayout(self.h_boxn)
        self.v_box.addLayout(self.h_box3)
        self.v_box.addLayout(self.h_box4)
        self.v_box.addLayout(self.h_box1)
        self.v_box.addLayout(self.h_box2)

        self.setLayout(self.v_box)

        self.btn_dasturchi.clicked.connect(self.benom)
        self.btn_grafik.clicked.connect(self.nom)
        self.btn_marketing.clicked.connect(self.nomalum)
        self.tun_kun.clicked.connect(self.Tun_Kun_power)

        self.show()

    def Tun_Kun_power(self):
        if self.tun_kun.text() == '🌞':
            self.setStyleSheet('background: black; color: white')
            self.tun_kun.setText('🌚')

        elif self.tun_kun.text() == '🌚':
            self.setStyleSheet('background: white; color: black')
            self.tun_kun.setText('🌞')

    def benom(self):
        self.close()
        self.d = Xakker()
        self.d.show()

    def nom(self):
        self.close()
        self.gr = Grafik()
        self.gr.show()

    def nomalum(self):
        self.close()
        self.m = Marketing()
        self.m.show()

class Xakker(QWidget):
    def __init__(self) -> None:
        super().__init__()
        self.setFixedSize(450,300)

        self.v_box = QVBoxLayout()
        self.h_box = QHBoxLayout()
        self.h_box_1 = QHBoxLayout()
        self.h_box_2 = QHBoxLayout()

        self.labeld = Label('Dasturlash yo`nalishi')
        
        self.labeld_1 = QLabel('''
Bootcamp Foundation kursimiz 
        0 dan dasturlashni o`rganmoqchi bo`lganar uchun''')
        self.labeld_2 = QLabel('''
Bootcamp Result kursimiz 
        Dasturlashdan boshlang`ich blimlarga ega bo`lganlar uchun''')
        self.labeld_3 = QLabel('Qaysi darsimiz sizga maqul ?')

        self.btn_Bootcamp_foundation = Button_RB('Bootcamp Foundation')
        self.btn_Bootcamp_Result = Button_RB('Bootcamp Result')

        self.btns_1 = Button_red('Exit')
        self.btns_2 = Button_gold('Back')
        self.btns_2.setShortcut('shift+z')
        self.btns_3 = Button('Next')
        self.btns_3.setShortcut('Ctrl+/')
        self.x_tun_kun = Button_tun_kun('🌞')

        self.h_box.addStretch()
        self.h_box.addWidget(self.labeld)
        self.h_box.addStretch()
        self.h_box.addWidget(self.x_tun_kun)

        self.h_box_1.addWidget(self.btns_1)
        self.h_box_1.addWidget(self.btns_2)
        self.h_box_1.addWidget(self.btns_3)

        self.h_box_2.addWidget(self.btn_Bootcamp_foundation)        
        self.h_box_2.addWidget(self.btn_Bootcamp_Result)

        self.v_box.addLayout(self.h_box)
        self.v_box.addWidget(self.labeld_1)
        self.v_box.addWidget(self.labeld_2)
        self.v_box.addWidget(self.labeld_3)
        self.v_box.addLayout(self.h_box_2)
        self.v_box.addLayout(self.h_box_1)

        self.setLayout(self.v_box)
        
        self.btns_1.clicked.connect(self.exit_d)
        self.btns_2.clicked.connect(self.back)
        self.btns_3.clicked.connect(self.Next)
        self.x_tun_kun.clicked.connect(self.XTun_Kun_power)
        
        self.show()

    def XTun_Kun_power(self):
        if self.x_tun_kun.text() == '🌞':
            self.setStyleSheet('background: black; color: white')
            self.x_tun_kun.setText('🌚')

        elif self.x_tun_kun.text() == '🌚':
            self.setStyleSheet('background: white; color: black')
            self.x_tun_kun.setText('🌞')
    
    def exit_d(self):
        self.close()

    def back(self):
        self.close()
        self.menyu = Najot_Talim()
        self.menyu.show()
    
    def Next(self):
        _ = self.sender().text()
        if self.btn_Bootcamp_foundation.isChecked():
            self.close(),
            self.d = Bootcamp_foundation()
            self.d.show()
        elif self.btn_Bootcamp_Result.isChecked():
            self.close()
            self.d = Bootcamp_Result()
            self.d.show()

class Grafik(QWidget):
    def __init__(self) -> None:
        super().__init__()
        self.setFixedSize(450,300)

        self.v_boxg = QVBoxLayout()
        self.h_boxg = QHBoxLayout()
        self.h_boxg_1 = QHBoxLayout()
        self.h_boxg_2 = QHBoxLayout()

        self.labelg = Label('Grafik Dizayn yo`nalishi')
        
        self.Label = QLabel('Bootcamp Foundation darsimiz haftada 3 kun')
        self.Label = QLabel('Bootcamp Result darsimiz haftada 5 kun')
        self.label_3 = QLabel('Qaysi darsimiz sizga maqul ?')

        self.btn_Bootcamp_foundation = Button_RB('Bootcamp Foundation')
        self.btn_Bootcamp_Result = Button_RB('Bootcamp Result')

        self.btns_1 = Button_red('Exit')
        self.btns_2 = Button_gold('Back')
        self.btns_2.setShortcut('shift+z')

        self.btns_3 = Button('Next')
        self.btns_3.setShortcut('Ctrl+/')
        
        self.g_tun_kun = Button_tun_kun('🌞')

        self.h_boxg.addStretch()
        self.h_boxg.addWidget(self.labelg)
        self.h_boxg.addStretch()
        self.h_boxg.addWidget(self.g_tun_kun)

        self.h_boxg_1.addWidget(self.btns_1)
        self.h_boxg_1.addWidget(self.btns_2)
        self.h_boxg_1.addWidget(self.btns_3)

        self.h_boxg_2.addWidget(self.btn_Bootcamp_foundation)        
        self.h_boxg_2.addWidget(self.btn_Bootcamp_Result)

        self.v_boxg.addLayout(self.h_boxg)
        self.v_boxg.addWidget(self.Label)
        self.v_boxg.addWidget(self.Label)
        self.v_boxg.addWidget(self.label_3)
        self.v_boxg.addLayout(self.h_boxg_2)
        self.v_boxg.addLayout(self.h_boxg_1)

        self.setLayout(self.v_boxg)
        
        self.btns_1.clicked.connect(self.exit_g)
        self.btns_2.clicked.connect(self.back)
        self.btns_3.clicked.connect(self.Next_g)
        self.g_tun_kun.clicked.connect(self.GTun_Kun_power)

        self.show()

    def GTun_Kun_power(self):
        if self.g_tun_kun.text() == '🌞':
            self.setStyleSheet('background: black; color: white')
            self.g_tun_kun.setText('🌚')

        elif self.g_tun_kun.text() == '🌚':
            self.setStyleSheet('background: white; color: black')
            self.g_tun_kun.setText('🌞')
    
    def back(self):
        self.close()
        self.menyu = Najot_Talim()
        self.menyu.show()

    def exit_g(self):
        self.close()

    def Next_g(self):
        _ = self.sender().text()
        if self.btn_Bootcamp_foundation.isChecked():
            self.close(),
            self.d = Bootcamp_foundation()
            self.d.show()
        elif self.btn_Bootcamp_Result.isChecked():
            self.close()
            self.d = Bootcamp_Result()
            self.d.show()

class Marketing(QWidget):
    def __init__(self) -> None:
        super().__init__()
        self.setFixedSize(450,300)

        self.v_boxm = QVBoxLayout()
        self.h_boxm = QHBoxLayout()
        self.h_boxm_1 = QHBoxLayout()
        self.h_boxm_3 = QHBoxLayout()

        self.labelm = Label('Marketing yo`nalishi')
        
        self.labelm_1 = QLabel('Bootcamp Foundation darsimiz haftada 3 kun')
        self.labelm_2 = QLabel('Bootcamp Result darsimiz haftada 5 kun')
        self.labelm_3 = QLabel('Qaysi darsimiz sizga maqul ?')

        self.btnsm_1 = Button_red('Exit')
        self.btnsm_2 = Button_gold('Back')
        self.btnsm_2.setShortcut('shift+z')

        self.btnsm_3 = Button('Next')
        self.btnsm_3.setShortcut('Ctrl+/')
        
        self.m_tun_kun = Button_tun_kun('🌞')

        self.btnsm_r3 = Button_RB('Bootcamp Result')
        self.btnsm_r4 = Button_RB('Bootcamp Foundation')

        self.h_boxm.addStretch()
        self.h_boxm.addWidget(self.labelm)
        self.h_boxm.addStretch()
        self.h_boxm.addWidget(self.m_tun_kun)

        self.h_boxm_1.addWidget(self.btnsm_1)
        self.h_boxm_1.addWidget(self.btnsm_2)
        self.h_boxm_1.addWidget(self.btnsm_3)

        self.h_boxm_3.addWidget(self.btnsm_r4)
        self.h_boxm_3.addWidget(self.btnsm_r3)

        self.v_boxm.addLayout(self.h_boxm)
        self.v_boxm.addWidget(self.labelm_2)
        self.v_boxm.addWidget(self.labelm_1)
        self.v_boxm.addWidget(self.labelm_3)
        self.v_boxm.addLayout(self.h_boxm_3)
        self.v_boxm.addLayout(self.h_boxm_1)

        self.setLayout(self.v_boxm)

        self.btnsm_1.clicked.connect(self.Exit_m)
        self.btnsm_2.clicked.connect(self.back)
        self.btnsm_3.clicked.connect(self.Next_m)
        self.m_tun_kun.clicked.connect(self.MTun_Kun_power)

        self.show()

    def MTun_Kun_power(self):
        if self.m_tun_kun.text() == '🌞':
            self.setStyleSheet('background: black; color: white')
            self.m_tun_kun.setText('🌚')

        elif self.m_tun_kun.text() == '🌚':
            self.setStyleSheet('background: white; color: black')
            self.m_tun_kun.setText('🌞')
    
    def back(self):
        self.close()
        self.menyu = Najot_Talim()
        self.menyu.show()
    
    def Exit_m(self):
        self.close()

    def Next_m(self):
        _ = self.sender().text()
        if self.btnsm_r3.isChecked():
            self.close(),
            self.d = Bootcamp_foundation()
            self.d.show()
        elif self.btnsm_r4.isChecked():
            self.close()
            self.d = Bootcamp_Result()
            self.d.show()

class Bootcamp_foundation(QWidget):
    def __init__(self) -> None:
        super().__init__()
        
        self.label_bf = Label('Bootcamp Foundation')
        self.label_Aloqa = QLabel('📱Aloqa : +99878 888 98 88')
        self.label_Telegram = QLabel('Telegram: https://t.me/najottalim')
        self.label_Instagram = QLabel('Instagram: https://instagram.com/najottalim?igshid=MzRlODBiNWFlZA==')
        self.label_YouTube = QLabel('YouTube: https://www.youtube.com/@najottalim')
        self.label_Online = QLabel('Online Kurs Saytimiz: 🌐 https://najottalim.uz')
        self.label_nt_bot = QLabel('🤖 ->: https://t.me/aloqa_ntbot')
        self.label_malumot = QLabel("""
Assalomu alaykum 
Bootcamp foundation bosqichi — 5 oydan iborat bo'lib, haftada 5 kun 2-3 soatdan davom etadi.""")
        self.label_kurs_narxi = QLabel("""
        Dastur narxi:

Kurs narxi: (Farg'ona filiali uchun)

    🔰 Kurs narxi oyiga: 1 760 000 so'm.
    🔰 Ikkiga bo`lib to`lash: 8 100 000 so`m (Jami: 16 200 000 so'm) (3 160 000 so`m tejab qolasiz)
    🔰 Bittada umumiy to`lov qilinsa: 15 390 000 so'm (810 000 so`m tejab qolasiz) 

Kurs narxi: (Toshkent filiali uchun)

    🔰Odindan oyma-oy 2.200.000 
    🔰Oldindan 2 marta to'lov 10.120.000
    🔰Oldindan bittada: 19.228.000""")
        self.label_laptop = QLabel('''
        Kerakli Kompyuter haqida:
        
🔰 Dasturlash uchun talab qilinadigan minimum noutbuk, agar yangi olmoqchi bo`lsangiz:
    - Kami bilan Core i5 (10-avlod) yoki AMD Ryzen 5 (Core i7 bo`lsa yaxshi)
    - Tezkor xotira RAM kami bilan 8GB (16 bo'lsa yaxshi)\- Asosiy Xotira SSD kami bilan 256 GB
🔰 Agar Apple MacBook olmoqchi bo`lsangiz va pulingiz yetarli bo`lsa:
    - Kami bilan M1 Protsessor
    - Kami bilan 8GB RAM xotira
    - Kami bilan 256GB doimiy SSD xotira
🔰 Agar oldingi kompyuteringiz bo`lsa uning texnik holatini quyidagilarga keltirib olishingiz maqsadga muvofiq:
    - RAM xotira 8GB kamida;
    - Agar HDD xotira bo`lsa, uni kamida 256GB SSDga almashtirish yoki HDD yoniga o`rnatish''')

        self.v_box_bf = QVBoxLayout()
        self.h_box_bf = QHBoxLayout()
        self.h_box_label_1 = QHBoxLayout()

        self.btn_BF_1 = Button_red('Exit')
        self.btn_BF_2 = Button_gold('Menyu')
        self.btn_BF_2.setShortcut('ctrl+x')
        self.bf_tun_kun = Button_tun_kun('🌞')

        self.h_box_bf.addWidget(self.btn_BF_1)
        self.h_box_bf.addWidget(self.btn_BF_2)

        self.h_box_label_1.addStretch()
        self.h_box_label_1.addWidget(self.label_bf)
        self.h_box_label_1.addStretch()
        self.h_box_label_1.addWidget(self.bf_tun_kun)

        self.v_box_bf.addLayout(self.h_box_label_1)
        self.v_box_bf.addWidget(self.label_malumot)
        self.v_box_bf.addWidget(self.label_kurs_narxi)
        self.v_box_bf.addWidget(self.label_laptop)
        self.v_box_bf.addWidget(self.label_Aloqa)
        self.v_box_bf.addWidget(self.label_Telegram)
        self.v_box_bf.addWidget(self.label_nt_bot)
        self.v_box_bf.addWidget(self.label_Instagram)
        self.v_box_bf.addWidget(self.label_Online)
        self.v_box_bf.addWidget(self.label_YouTube)
        self.v_box_bf.addLayout(self.h_box_bf)

        self.setLayout(self.v_box_bf)
        self.bf_tun_kun.clicked.connect(self.bfTun_Kun_power)

        self.btn_BF_1.clicked.connect(self.exit_bf)
        self.btn_BF_2.clicked.connect(self.back_bf)
        
        self.show()

    def bfTun_Kun_power(self):
        if self.bf_tun_kun.text() == '🌞':
            self.setStyleSheet('background: black; color: white')
            self.bf_tun_kun.setText('🌚')

        elif self.bf_tun_kun.text() == '🌚':
            self.setStyleSheet('background: white; color: black')
            self.bf_tun_kun.setText('🌞')

    def exit_bf(self):
        self.close()

    def back_bf(self):
        self.close()
        self.menyu = Najot_Talim()
        self.menyu.show()
    
class Bootcamp_Result(QWidget):
    def __init__(self) -> None:
        super().__init__()

        self.label_br = Label('Bootcamp Result')
        self.label_Aloqa = QLabel('📱Aloqa : +99878 888 98 88')
        self.label_Telegram = QLabel('Telegram: https://t.me/najottalim')
        self.label_Instagram = QLabel('Instagram: https://instagram.com/najottalim?igshid=MzRlODBiNWFlZA==')
        self.label_YouTube = QLabel('YouTube: https://www.youtube.com/@najottalim')
        self.label_Online = QLabel('Online Kurs Saytimiz: 🌐 https://najottalim.uz')
        self.label_nt_bot = QLabel('🤖 ->: https://t.me/aloqa_ntbot')
        self.label_malumot = QLabel("""
Assalomu alaykum 
Bootcamp result bosqichi 6 oydan iborat bo'lib,haftada 5 kun 3-4 soatdan davom etadi.""")
        self.label_kurs_narxi = QLabel("""
        Dastur narxi:

Farg'ona filiali uchun kurs narxi:
    🔰 Kurs narxi oyiga: 1 760 000 so'm.
    🔰 Ikkiga bo`lib to`lash: 8 100 000 so`m (Jami: 16 200 000 so'm) (3 160 000 so`m tejab qolasiz)
    🔰 Bittada umumiy to`lov qilinsa: 15 390 000 so'm (810 000 so`m tejab qolasiz) 

Kurs narxi: (Toshkent filiali uchun)
    🔰Odindan oyma-oy 2.200.000 
    🔰Oldindan 2 marta to'lov 10.120.000
    🔰Oldindan bittada: 19.228.000""")
        self.label_laptop = QLabel('''
        Kerakli Kompyuter haqida:
        
🔰 Dasturlash uchun talab qilinadigan minimum noutbuk, agar yangi olmoqchi bo`lsangiz:
    - Kami bilan Core i5 (10-avlod) yoki AMD Ryzen 5 (Core i7 bo`lsa yaxshi)
    - Tezkor xotira RAM kami bilan 8GB (16 bo'lsa yaxshi)\- Asosiy Xotira SSD kami bilan 256 GB
🔰 Agar Apple MacBook olmoqchi bo`lsangiz va pulingiz yetarli bo`lsa:
    - Kami bilan M1 Protsessor
    - Kami bilan 8GB RAM xotira
    - Kami bilan 256GB doimiy SSD xotira
🔰 Agar oldingi kompyuteringiz bo`lsa uning texnik holatini quyidagilarga keltirib olishingiz maqsadga muvofiq:
    - RAM xotira 8GB kamida;
    - Agar HDD xotira bo`lsa, uni kamida 256GB SSDga almashtirish yoki HDD yoniga o`rnatish''')

        self.v_box_br = QVBoxLayout()
        self.h_box_br = QHBoxLayout()
        self.h_box_label = QHBoxLayout()

        self.btn_br_1 = Button_red('Exit')
        self.btn_br_2 = Button_gold('Menyu')
        self.btn_br_2.setShortcut('ctrl+.')
        self.br_tun_kun = Button_tun_kun('🌞')

        self.h_box_label.addStretch()
        self.h_box_label.addWidget(self.label_br)
        self.h_box_label.addStretch()
        self.h_box_label.addWidget(self.br_tun_kun)

        self.h_box_br.addWidget(self.btn_br_1)
        self.h_box_br.addWidget(self.btn_br_2)

        self.v_box_br.addLayout(self.h_box_label)
        self.v_box_br.addWidget(self.label_malumot)
        self.v_box_br.addWidget(self.label_kurs_narxi)
        self.v_box_br.addWidget(self.label_laptop)
        self.v_box_br.addWidget(self.label_Aloqa)
        self.v_box_br.addWidget(self.label_Telegram)
        self.v_box_br.addWidget(self.label_nt_bot)
        self.v_box_br.addWidget(self.label_Instagram)
        self.v_box_br.addWidget(self.label_Online)
        self.v_box_br.addWidget(self.label_YouTube)
        self.v_box_br.addLayout(self.h_box_br)

        self.setLayout(self.v_box_br)

        self.btn_br_1.clicked.connect(self.exit_br)
        self.btn_br_2.clicked.connect(self.back_br)
        self.br_tun_kun.clicked.connect(self.brTun_Kun_power)
        
        self.show()

    def brTun_Kun_power(self):
        if self.br_tun_kun.text() == '🌞':
            self.setStyleSheet('background: black; color: white')
            self.br_tun_kun.setText('🌚')

        elif self.br_tun_kun.text() == '🌚':
            self.setStyleSheet('background: white; color: black')
            self.br_tun_kun.setText('🌞')
    
    def exit_br(self):
        self.close()

    def back_br(self):
        self.close()
        self.menyu = Najot_Talim()
        self.menyu.show()


app = QApplication(sys.argv)
win = Najot_Talim()
sys.exit(app.exec())