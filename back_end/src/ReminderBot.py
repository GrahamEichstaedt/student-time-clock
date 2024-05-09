import smtplib
import datetime 
from time import sleep 

def load_reminders():
        # Example using a simple text file
        reminders = []
        with open("reminders.txt", "r") as file:
                # date_string = 
                for line in file:
                        date_string, message = line.strip().split(',')
                        reminders.append((datetime.datetime.strptime(date_string, "%Y-%m-%d %H:%M"), message))
                return reminders
def send_reminder(message):
        with smtplib.SMPT("smtp.yourprovider.com", 587) as server: #replace with my email provider
                server.starttls()
                server.login("GrahamE@ywcanwil.org", "1234")
                server.sendmail("your_email@email.com", "your_email@email.com", message)
def main():
        reminders = load_reminders()
        while True:
                for reminder_time, message in reminders:
                        if datetime.datetime.now() >= reminder_time:
                                send_reminder(message)
                                reminders.remove((reminder_time, message))
                sleep(60)
if __name__ == "__main__":
        main()

