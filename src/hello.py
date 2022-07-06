import os
import sys

#create a file that includes the incoming value
def create_file():
    os.system("echo " + sys.argv[1] + " > hello.txt")

if __name__ == '__main__':
    create_file()