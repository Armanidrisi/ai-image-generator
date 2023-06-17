from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/image', methods=['GET', 'POST'])
def generate_image():
    if request.method == 'POST':
        prompt = request.json['prompt']
        url = "https://openai80.p.rapidapi.com/images/generations"

        payload = {
            "prompt": prompt,
            "n": 10,
            "size": "1024x1024"
        }
        headers = {
            "content-type": "application/json",
            "X-RapidAPI-Key": "YOUR_API_KEY",  # API Docs: https://rapidapi.com/openai-api-openai-api-default/api/openai80
            "X-RapidAPI-Host": "openai80.p.rapidapi.com"
        }

        response = requests.post(url, json=payload, headers=headers)

        return jsonify(response.json())

    data = {
        'created': 1686972623,
        'data': [
            {
                'url': 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-3PqyQYra9LvRBGRfWOtjNN7f/user-OQ7jGQ6LMuEE8JALwQ9A4lMI/img-mcE40tB8YjAzSqJaVeZZax5H.png?st=2023-06-17T02%3A30%3A23Z&se=2023-06-17T04%3A30%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-16T20%3A53%3A07Z&ske=2023-06-17T20%3A53%3A07Z&sks=b&skv=2021-08-06&sig=KWgw5R1aHlCtEKE56oCODtywNqBTjsdBjJ6gFH0x0BA%3D'
            },
            {
                'url': 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-3PqyQYra9LvRBGRfWOtjNN7f/user-OQ7jGQ6LMuEE8JALwQ9A4lMI/img-1s3DI3le3kUklwDCYmQGMdXf.png?st=2023-06-17T02%3A30%3A23Z&se=2023-06-17T04%3A30%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-16T20%3A53%3A07Z&ske=2023-06-17T20%3A53%3A07Z&sks=b&skv=2021-08-06&sig=PShDYMWSY4J7CRVB889MiloR0E21iG87QZhEJEI8tTQ%3D'
            }
        ]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
