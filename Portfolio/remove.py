from rembg import remove
from PIL import Image

input_path = 'img/yo.jpg'
output_path = 'img/yo.jpg'

input = Image.open(input_path)
output = remove(input)
output.save(output_path)