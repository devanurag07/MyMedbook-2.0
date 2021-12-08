import requests
API_KEY = 'z2jbt5ZrJEh64nfWOMLou8iVyRBc1XdNK3PQk9DF0vHeaA7UlIlnFJYCAgLvufa08bijK92EBwHZQWVG'
url = "https://www.fast2sms.com/dev/bulkV2"
MESSAGE_URL = 'https://www.fast2sms.com/dev/bulkV2'
HEADERS = {
    'authorization': API_KEY,
    'Content-Type': "application/x-www-form-urlencoded",
    'Cache-Control': "no-cache",
}


def send_message(to, message):
    payload = "message=%s&language=english&route=q&numbers=%s" % (message, to)

    response = requests.post(MESSAGE_URL, data=payload, headers=HEADERS)
    return response
