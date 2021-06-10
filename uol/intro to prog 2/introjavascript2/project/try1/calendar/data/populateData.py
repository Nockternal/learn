import csv
import random

surveySize = 100

# lists
fieldnames = [
    'daily_fruit_portions', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday', 'Weekly_spend',
    'favorite_foods']
days_choices = ['Take-Aways', 'cooked from Fresh', 'Ready Meals', 
    'Ate Out', 'Skipped Meal', 'Left Overs']
daily_spend = ['$15-30', '$30-50', '$50-70', '$70+']
fruits = ['1', '2', '3', '4', '5', '6', '7+']
rows = []

#print(random.choice(fruits))

# generate data
for i in range(surveySize):
    rows.append({
        'daily_fruit_portions':random.choice(fruits),
        'Monday':random.choice(days_choices),
        'Tuesday':random.choice(days_choices),
        'Wednesday':random.choice(days_choices),
        'Thursday':random.choice(days_choices),
        'Friday':random.choice(days_choices),
        'Saturday':random.choice(days_choices),
        'Sunday':random.choice(days_choices),
        'Weekly_spend':random.choice(daily_spend),
        'favorite_foods': 'NaN'
    })
# print(rows)
# write data to file
with open('data.csv', 'w+', encoding='UTF8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

    