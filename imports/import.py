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

cr = csv.reader(open("import_all_datas.csv","r"))

client = pymongo.MongoClient("localhost:27017")
db = client.auto
collection = db.marques
modeles = db.vehicules
listeModele = []
tmpMarque = 'Abarth'
for row in cr:
	
	year_debut = convertYear(row[2])
	year_fin = convertYear(row[3])
	db.vehicules.insert({"marque": row[0], "modele": row[1], "date_debut": year_debut, "date_fin": year_fin, "version": row[4], "portes": row[5], "carburant": row[6], "puissance": row[7], "boite_vitesse": row[8], "prix": row[9], "annee": row[10]})
	# print(row[0]) 
	# print(tmpMarque)
	
	if row[0] == tmpMarque:
		if row[1] not in listeModele:
			listeModele.append(row[1])
		tmpMarque = row[0]
	else:
		
		db.marques.insert({"name":tmpMarque, "url":"/images/logo-"+tmpMarque + ".jpg", "modeles":listeModele})
		# print(listeModele)
		tmpMarque = row[0]
		del listeModele[:]
		listeModele.append(row[1])
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
