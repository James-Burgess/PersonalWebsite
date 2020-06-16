#!/usr/bin/env python
import bottle
import subprocess
import os

app = bottle.app()

1
@bottle.route('/')
def root_index():
    print('hiop')
    return bottle.template('fallback')

@bottle.route('/git')
def git_redirect():
    return bottle.redirect('https://github.com/James-burgess')

@bottle.route('/stack_overflow')
def so_redirect():
    return bottle.redirect('https://stackoverflow.com/users/6372042/james-burgess')

@bottle.route('/hacker_rank')
def hr_redirect():
    return bottle.redirect('https://github.com/James-burgess')

@bottle.route('/colabs')
def colab_redirect():
    return bottle.redirect('https://colab.research.google.com/drive/1vQjkl32A4BCYFfGcPgijIh3OIMRa2lhs?usp=sharing')


@bottle.route('/setup')
def setup_redirect():
    return bottle.redirect('https://raw.githubusercontent.com/James-Burgess/dotfiles/master/setup.sh')


@bottle.route('/json')
def json_reply():
    heads = bottle.request.headers
    bottle.response.content_type = 'application/json'

    response = {
        'headers': dict(heads),
        'response': dict(bottle.response.headers)
    }
    return response

if __name__=='__main__':
    bottle.debug(True)
    bottle.run(app=app,host='localhost',port=8000)

