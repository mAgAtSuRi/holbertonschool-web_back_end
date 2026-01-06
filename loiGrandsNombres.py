import random
import matplotlib.pyplot as plt

REPEATS = 10

def randomnum(x):
    total = 0
    for _ in range(x):
        total += random.randint(1, 100)
    return total / x

def moyenne_des_moyennes(x):
    total = 0
    for _ in range(REPEATS):
        total += randomnum(x)
    return total / REPEATS

def grandsnombres():
    numIterations = [1, 10, 100, 1000, 10000, 100000, 1000000]
    moyennes = []

    for num in numIterations:
        moyennes.append(moyenne_des_moyennes(num))

    plt.plot(numIterations, moyennes, marker='o', label="Moyenne des moyennes")
    plt.axhline(y=50, linestyle='--', label="Valeur théorique (50)")

    plt.xscale('log')
    plt.xlabel("Nombre d'itérations (log)")
    plt.ylabel("Moyenne")
    plt.title("Loi des grands nombres (10 répétitions)")
    plt.legend()
    plt.grid(True)

    plt.savefig("loi_grands_nombres_10.png")

grandsnombres()
