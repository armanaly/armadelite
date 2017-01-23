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

marques = db.marques


listeModele = []
for row in cr:
	
	if row[1] not in listeModele:
		listeModele.append(row[1])

db.marques.update({"name": "AUDI"},{"modeles": listeModele})
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
