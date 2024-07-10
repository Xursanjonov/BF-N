import sys

from PyQt5.QtWidgets import (
     QApplication,
     QWidget,
     QPushButton,
     QGridLayout,
     QVBoxLayout,
     QHBoxLayout,
     QLineEdit
)

class Shunchaki(QWidget):

    def __init__(self) -> None:
        super().__init__()

        self.v_box = QVBoxLayout()
        self.h_box_2 = QHBoxLayout()
        self.h_box_1 = QHBoxLayout()

        self.edit = QLineEdit()

        self.grid = QGridLayout()
        self.setLayout(self.grid)

        names = ['Cls', 'Bck', '', 'Close',
                 '7', '8', '9', '/',
                 '4', '5', '6', '*',
                 '1', '2', '3', '-',
                 '0', '.', '=', '+']

        positions = [(i, j) for i in range(5) for j in range(4)]

        for position, name in zip(positions, names):

            if name == '':
                continue

            button = QPushButton(name)
            self.grid.addWidget(button, *position)

        self.move(300, 150)
        self.setWindowTitle('Calculator')

        self.h_box_1.addWidget(self.edit)
        # self.h_box_2.addWidget(self.grid)

        self.v_box.addLayout(self.h_box_1)
        self.v_box.addWidget(self.grid)

        self.setLayout(self.v_box)
        
        self.show()

    def click(self):
        btn = self.sender().text()
        self.edit_display.setText('')


app = QApplication(sys.argv)
win = Shunchaki()
sys.exit(app.exec_())