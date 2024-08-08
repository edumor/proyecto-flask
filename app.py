from flask import Flask, render_template, redirect, url_for
import os
import database as db


template_dir = os.path.dirname(os.path.abspath(__file__))
template_dir = os.path.join(template_dir, 'templates')

app = Flask(__name__, template_folder=template_dir)

# rutas de la aplicación
@app.route('/')
def home():
    cursor = db.database.cursor()
    cursor.execute('SELECT * FROM usuarios')
    myresult = cursor.fetchall()
    # convertir los datos a diccionario
    insertObjet = []
    column_names = [column[0] for column in cursor.description]
    for record in myresult:
        insertObjet.append(dict(zip(column_names, record)))
    cursor.close()
    
    return render_template('registros.html', data=insertObjet)

@app.route('/delete/<int:id>')
def delete(id):
    # Lógica para eliminar el registro con el id proporcionado
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True, port=4000)
