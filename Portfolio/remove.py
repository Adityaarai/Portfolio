from rembg import remove
from PIL import Image

input_path = r'C:\Users\Aditya\Desktop\Homework\Portfolio\img\back.jpeg'
output_path = r'C:\Users\Aditya\Desktop\Homework\Portfolio\img\back.jpeg'

input = Image.open(input_path)
output = remove(input)
output.save(output_path)