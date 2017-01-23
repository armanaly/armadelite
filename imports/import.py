import csv
import pymongo

def right(s, amount):
    return s[-amount:]

def convertYear(argYear):

	if argYear != '--' and argYear !='':
		tmpYear = right(argYear,2)
		intYear = int(tmpYear)
		if 0 <= intYear <= 16:
			year = '20' + tmpYear
		else:
			year = '19' + tmpYear
	else:
		year = argYear
	return year

cr = csv.reader(open("import.csv","r"))

client = pymongo.MongoClient("localhost:27017")
db = client.auto
collection = db.marques
modeles = db.vehicules
listeModele = []
for row in cr:
	
	year_debut = convertYear(row[2])
	year_fin = convertYear(row[3])
	db.vehicules.insert({"marque": row[0], "modele": row[1], "date_debut": year_debut, "date_fin": year_fin, "version": row[4], "portes": row[5], "carburant": row[6], "puissance": row[7], "boite_vitesse": row[8]})
	if row[1] not in listeModele:
		listeModele.append(row[1])

db.marques.insert({"name":"AUDI", "url":"/images/logo-audi.jpg", "modeles":listeModele})
# try:
#     iter = modeles.find()
#     for item in iter:
#         print(str(item['version']) + "\n")
# except Exception as e:
#     print("Error trying to read collection:", type(e), e)

#if 0 <= tmpYear <= 16:
#		year = '20' + toString(tmpYear)
#	else	
#		year = '19' + toString(tmpYear)
#	print(year)
