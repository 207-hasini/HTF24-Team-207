from flask import Flask, render_template, request, jsonify

app = Flask(_name_)

# Dummy book data for recommendations
BOOKS = [
    {"title": "Book 1", "genre": "Fiction", "rating": 4.2},
    {"title": "Book 2", "genre": "Fantasy", "rating": 4.5},
    {"title": "Book 3", "genre": "Mystery", "rating": 3.8},
    {"title": "Book 4", "genre": "Non-Fiction", "rating": 4.7},
    {"title": "Book 5", "genre": "Sci-Fi", "rating": 4.0},
]

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def search_books():
    query = request.args.get('query', '')
    results = [book['title'] for book in BOOKS if query.lower() in book['title'].lower()]
    return jsonify(results)

@app.route('/recommend', methods=['GET'])
def recommend_books():
    # For simplicity, recommending top-rated books
    recommendations = sorted(BOOKS, key=lambda x: x['rating'], reverse=True)[:3]
    return jsonify(recommendations)

if _name_ == '_main_':
    app.run(debug=True)