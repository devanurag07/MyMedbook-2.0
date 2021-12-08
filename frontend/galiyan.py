import pyautogui as pg
def send_galiyan():
    
    import time
    time.sleep(10)
    for i in range(10000):
        galiyan=["Akash teri maan ki chut main loda","Akash teri bhen ki chut main land","Akash gaandu hai ","Akash 10rs main gaand deta hai","Akash GB road ki randi hai","Akash ki bhen ki choot","Akash ek no ka gaandu hai use ye ni pta kya bolna hai","BHen ka loda hai ","AKASH TERI MAAN KI CHOOT "]
        
        for gali in galiyan:
            pg.typewrite(gali+"\n",0.015)


send_galiyan()
