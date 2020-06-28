import json
import xmltodict
import requests
import os
from bs4 import BeautifulSoup


def get_url(name):
    url = f"https://www.google.com/search?hl=EN&tbm=isch&sxsrf=ALeKk01ySi1nXY_XKaRUURUd3hqpZsHTBA%3A1593322351097&source=hp&biw=1366&bih=630&ei=byv4XtDlA4GW4-EP6KeduAw&q={name}&oq={name}&gs_lcp=CgNpbWcQAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyAggAMgIIADIFCAAQsQMyAggAMgIIADICCABQyAJYjRtgwx1oBHAAeACAAc0DiAGJDZIBCTAuNi4wLjEuMZgBAKABAaoBC2d3cy13aXotaW1nsAEA&sclient=img&ved=0ahUKEwiQ2f2l5KPqAhUByzgGHehTB8cQ4dUDCAY&uact=5"
    ses = requests.session()
    ses = ses.get(url)
    soup = BeautifulSoup(ses.text, 'html.parser')
    img = soup.findAll('img')[1]['src']
    return img


def create(json, li=[]):
    for item in json:
        if item['my_status'] == "Completed":
            img = get_url(item['series_title'])
            url = f"https://myanimelist.net/anime/{item['series_animedb_id']}/"
            di = {'name': item['series_title'],
                  'score': item['my_score'],
                  'id': item['series_animedb_id'],
                  'image': img,
                  'url': url}
            li.append(di)
    return li


def main():
    print(os.chdir('src/Containers/'))
    with open("anime.xml") as xml_file:
        data_dict = xmltodict.parse(xml_file.read())

    json_data = json.dumps(data_dict)
    with open("anime.json", "w") as json_file:
        json_file.write(json_data)

    with open("anime.json") as file:
        file = json.load(file)
        js = file['myanimelist']['anime']

    js = create(js)
    os.remove('anime.xml')
    os.remove('anime.json')
    with open('anime.js', 'w') as fout:
        fout.write(f'export const anime =\n{json.dumps(js, sort_keys=True, indent=4)}')


if __name__ == "__main__":
    main()
