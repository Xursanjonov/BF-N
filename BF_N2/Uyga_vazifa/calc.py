import sys

from PyQt5.QtWidgets import (
    QApplication, 
    QWidget, 
    QHBoxLayout, 
    QVBoxLayout, 
    QPushButton,
    QLabel,
)

class MenuWin(QWidget):
    def init(self) -> None:
        super().init()

        self.setFixedSize(300,300)

        self.v_box = QVBoxLayout()
        self.h_box = QHBoxLayout()

        self.label = QLabel('Menu page')

        self.btn_back = QPushButton('back')
        self.btn_next = QPushButton('next')

        self.h_box.addStretch()
        self.h_box.addWidget(self.btn_back)
        self.h_box.addWidget(self.btn_next)

        self.v_box.addWidget(self.label)
        self.v_box.addLayout(self.h_box)

        self.setLayout(self.v_box)

        self.btn_next.clicked.connect(self.press_next)

        self.show()

    def press_next(self):
        self.close()
        self.f = FirstWin()
        self.f.show()


class FirstWin(QWidget):
    def init(self) -> None:
        super().init()

        self.setFixedSize(300,300)

        self.v_box = QVBoxLayout()
        self.h_box = QHBoxLayout()

        self.label = QLabel('First page')

        self.btn_menu = QPushButton('menu')
        self.btn_back = QPushButton('back')
        self.btn_next = QPushButton('next')

        self.h_box.addWidget(self.btn_menu)
        self.h_box.addStretch()
        self.h_box.addWidget(self.btn_back) 
        self.h_box.addWidget(self.btn_next)

        self.v_box.addWidget(self.label)
        self.v_box.addLayout(self.h_box)

        self.setLayout(self.v_box)

        self.btn_back.clicked.connect(self.press_back)


    def press_back(self):
        self.close()
        self.f = MenuWin()
        self.f.show()







app = QApplication(sys.argv)
win = MenuWin()
# first = FirstWin()
sys.exit(app.exec_())