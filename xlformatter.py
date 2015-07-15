import xlrd
import json

book = xlrd.open_workbook("Disease-rg.xlsx")
conditions = book.sheet_by_name("Disease")
f = open('diseases.js', 'a')
f.write("var diseases = ")
diseases = []

for r in range(1, conditions.nrows):
	# Create new speaker object
	diseases.append(conditions.cell(r,0).value)

f.write(json.dumps(diseases))
