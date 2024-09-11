from flask import Flask, render_template, request, jsonify
from googletrans import Translator
from gtts import gTTS
import os
import base64

app = Flask(__name__)

# Schemes data
schemes = [
    {
        "name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        "objective": "To provide income support to all landholding farmer families.",
        "features": "Direct transfer of ₹6,000 per year in three equal installments to the bank accounts of eligible farmers."
    },
    {
        "name":"Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "objective":"To provide insurance coverage and financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.",
        "features":"Low premium rates for farmers and coverage for all food & oilseeds crops and annual commercial/horticultural crops."
    },
    {
        "name":"Soil Health Card Scheme",
        "objective":"To promote soil health and productivity.",
        "features":" Issue of soil health cards to farmers, providing information on nutrient status and recommendations for soil improvement."
    },
    {
        "name":"Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
        "objective":"To improve irrigation coverage and water use efficiency.",
        "features":"Focus on creating sources of assured irrigation, per drop more crop, and enhancing recharge of aquifers."
    },
    {
        "name":"e-NAM (National Agriculture Market)",
        "objective":"To create a unified national market for agricultural commodities.",
        "features":"Online trading platform for agricultural commodities, facilitating better price discovery and increased market reach."
    },
    {
        "name":"Kisan Credit Card (KCC) Scheme",
        "objective":"To provide adequate and timely credit support to farmers.",
        "features":"Short-term credit for crops and term loans for allied activities, with benefits like subsidized interest rates and easy access to credit."
    },
    {
        "name":"National Mission for Sustainable Agriculture (NMSA)",
        "objective":"To promote sustainable agriculture through climate-resilient practices.",
        "features":"Activities like integrated farming, water use efficiency, soil health management, and conservation of natural resources."
    },
    {
        "name":"Paramparagat Krishi Vikas Yojana (PKVY)",
        "objective":"To promote organic farming.",
        "features":"Financial assistance to farmers adopting organic farming practices and support for certification and marketing of organic products."
    },
    {
        "name":"Pradhan Mantri Kisan Maandhan Yojana (PM-KMY)",
        "objective":"To provide social security to small and marginal farmers.",
        "features":"Pension scheme for farmers aged 18-40, ensuring a minimum fixed pension of ₹3,000 per month on attaining the age of 60 years."
    },
    {
        "name":"Gramin Bhandaran Yojana",
        "objective":"To provide scientific storage facilities for farmers.",
        "features":"Financial support for the construction of rural godowns, promoting scientific storage and reducing post-harvest losses."
    },
    {
        "name":"Rashtriya Krishi Vikas Yojana (RKVY)x   ",
        "objective":"To achieve high growth in agriculture and allied sectors.",
        "features":"Flexibility and autonomy to states in planning and executing projects related to agriculture and allied sectors."
    },
    {
        "name":"Micro Irrigation Fund (MIF)",
        "objective":"To facilitate the expansion of micro-irrigation.",
        "features":"Financial assistance for states to implement micro-irrigation projects, promoting water-use efficiency and enhancing crop productivity."
    }
]

@app.route('/')
def index():
    return render_template('index.html', schemes=schemes)

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json
    text = data['text']
    target_lang = data['language']

    translator = Translator()
    translated = translator.translate(text, dest=target_lang)

    return jsonify({'translated': translated.text})

@app.route('/speak', methods=['POST'])
def speak_text():
    data = request.json
    text = data['text']
    language = data['language']

    tts = gTTS(text=text, lang=language)
    filename = "temp.mp3"
    tts.save(filename)

    with open(filename, "rb") as file:
        audio_base64 = base64.b64encode(file.read()).decode('utf-8')

    os.remove(filename)

    return jsonify({'audio': audio_base64})

if __name__ == '__main__':
    app.run(debug=True)