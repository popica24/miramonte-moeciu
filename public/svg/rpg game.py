import time
import random
print("Astazi este o zi de marti in care te ai trezit la ora 7.")
time.sleep(2)
raspuns1 = input("Ce vei alege sa faci? voi merge la scoala/ voi sta acasa toata ziua.\n")
if raspuns1.lower() == "voi merge la scoala":
    print("Ai ales sa mergi la scoala.")
    time.sleep(1)
    print("Scoala este destul de plictisitoare astazi.")
    time.sleep(2)
    raspuns2 = input("Ce vrei sa faci pentru a scapa de plictiseala? invata sa programezi/ joaca-te pe telefon (nerecomandat)/ bate un coleg. \n")
    if raspuns2.lower() == "invata sa programezi":
        print("Ai ales ca vrei sa inveti sa programezi.")
        time.sleep(2)
        raspunsuri = ["Ai invatat din greu si ai ajuns un programator de succes, avand o viata fericita! 😀 (Good ending)\n ", "Programarea iti da batai de cap si nu ai reusit sa o intelegi... 😔 (bad ending)\n"]
        raspuns_ales = random.choice(raspunsuri)
        print(raspuns_ales)
        time.sleep(2)
        print("Da restart sa ne jucam din nou!")
    elif raspuns2.lower() == "joaca-te pe telefon":
        print("Ai ales ca vrei sa te joci pe telefon.")
        time.sleep(2)
        print("Ziua a trecut, iar tu nu ai invatat nimic. Parintii tai s-au suparat pe tine. 😔 (bad ending)\n")
        time.sleep(2)
        print("Da restart sa reparam situatia!")
    else:
        print("Ai ales ca vrei sa bati un coleg pentru a scapa de plictiseala.")
        time.sleep(2)
        raspunsuri = ["Din pricina acestei lupte, ai devenit kickboxer. 😀 (nice ending)\n", "Ai fost exmatriculat, deoarece ti-ai batut colegul. 😭 (very bad ending) \n"]
        raspuns_ales = random.choice(raspunsuri)
        print(raspuns_ales)
        time.sleep(2)
        print("Da restart sa ne jucam din nou!")
else:
    print("Ai ales sa stai toata ziua acasa.")
    time.sleep(2)
    print("Pentru a trece timpul mai repede ai ales sa faci o activitate.")
    time.sleep(2)
    raspuns3 = input("Ce activitate alegi sa faci? fa curat in casa/ joaca-te pe calculator/ nu face nimic. \n")
    if raspuns3.lower() == "fa curat in casa":
        print("Ai ales sa faci curat in casa.")
        time.sleep(2)
        print("Pe parcursul timpului ai devenit foarte bun la facut curat.")
        time.sleep(2)
        print("Dupa multi ani de munca ai ajuns menajerul lui David Beckham. 🙂  (good ending)\n")
        time.sleep(2)
        print("Da restart sa ne jucam din nou!")
    elif raspuns3 == "joaca-te pe calculator":
        print("Ai ales sa te joci pe calculator.")
        time.sleep(2)
        raspunsuri = ["Ai devenit atat de bun la CS:GO, incat ai ajuns campion mondial. 😀 (nice ending)\n", "Ti-ai pierdut vremea jucandu-te. Parintii tai s-au suparat ca nu ai facut nimic. 😔 (bad ending)\n "]
        raspuns_ales = random.choice(raspunsuri)
        print(raspuns_ales)
        time.sleep(2)
        print("Da restart sa ne jucam din nou!")
    else:
        print("Ai ales sa nu faci nimic.")
        time.sleep(2)
        print("Timpul a trecut degeaba, iar tu nu ai facut nimic si ai avut o viata grea. 😭 (very bad ending)\n")
        time.sleep(2)
        print("Da restart sa reparam situatia!")
