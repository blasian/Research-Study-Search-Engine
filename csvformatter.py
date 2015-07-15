import json
f = open("list-of-drugs.csv", "r")
n = open("drugs.json", "a");
a = []
for drug in f.readline().split("\r"):
	a.append(drug)

n.write(json.dumps(a))