import { useState, useEffect } from 'react';
import styles from './Calendar.module.css'; // Import CSS module for styling
import { nunito_sans } from '@/fonts/fonts';
import { events } from '../data';
import { CalendarIcon } from '@/icons/calendar';
import { Clock } from '@/icons/clock';
import { Location } from '@/icons/location';
import { Info } from '@/icons/info';
import { Alert } from '@/icons/alert';
import Link from 'next/link';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvents, setSelectedEvents] = useState(null)
    const [formattedCurrentDate, setFormattedCurrentDate] = useState('')
    const [todaysEvent, setTodaysEvent] = useState('')
    const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        const eventsForToday = filterEventsByDate(events, currentDate);
        setEventsForSelectedDate(eventsForToday);
        setSelectedDate(currentDate);
    }, []);

    const filterEventsByDate = (events, date) => {
        const filteredEvents = events.filter(event => {
            const eventDate = new Date(event.date);
            const formattedDate = `${eventDate.getFullYear()}-${eventDate.getMonth() + 1}-${eventDate.getDate()}`;

            return eventDate.toDateString() === date.toDateString();
        });

        return filteredEvents.length > 0 ? filteredEvents : null;
    };




    const handleDayClick = (day) => {
        setSelectedDate(day);
        const eventsForSelectedDate = filterEventsByDate(events, day);
        setSelectedEvents(eventsForSelectedDate)
        setEventsForSelectedDate(eventsForSelectedDate);
        // You can perform additional actions with the filtered events
        // You can perform additional actions here when a day is clicked
    };

    const generateCalendarDays = (year, month) => {
        const days = [];
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        // Add empty squares for days before the start of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className={styles.emptyDay} />);
        }

        // Add days of the month
        for (let i = 1; i <= totalDaysInMonth; i++) {
            const date = new Date(year, month, i);
            days.push(
                <div
                    key={i}
                    className={`${styles.day} ${date.getDate() === currentDate.getDate() ? styles.currentDate : ''} ${selectedDate && date.toDateString() === selectedDate.toDateString() ? styles.selected : ''}`}
                    onClick={() => handleDayClick(date)}
                >
                    {i}
                </div>
            );
        }

        console.log('formatCurrentDate()', formattedCurrentDate)

        // Calculate the number of empty squares at the end of the month
        const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
        const remainingEmptyDays = 7 - ((firstDayOfMonth + totalDaysInMonth) % 7);

        // Add empty squares for days after the end of the month
        for (let i = 0; i < remainingEmptyDays; i++) {
            days.push(<div key={`empty-${totalDaysInMonth + i}`} className={styles.emptyDay} />);
        }

        return days;
    };


    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();


    // const test = events?.filter(event => event.date === formattedCurrentDate[0].date)

    // console.log('Todayyyy', test)

    return (
        <div className={`${styles.calendar} ${nunito_sans.className}`}>

            <div className={styles.calendarContentContainer}>

                {/* <div>
                    {selectedEvents?.map(selectedEvent => {
                        return (
                            <div key={selectedEvent.id}>
                                <h1>{selectedEvent.title}</h1>
                                <p>{selectedEvent.description}</p>
                            </div>
                        )
                    })}
                </div> */}
                <div className={`${styles.eventWrapper} ${nunito_sans.className}`}>

                    {eventsForSelectedDate ? (
                        <div className={styles.eventContent}>
                            {/* <h1>{selectedDate?.toDateString()}</h1> */}
                            <div className={styles.selectedDate}>
                                <h3 className={styles.selectedDateMonth}>{`${currentDate.toLocaleString('default', { month: 'short' })}`}</h3>
                                <h3 className={styles.selectedDateDay}>{`${selectedDate?.getDate()}`}</h3>
                            </div>
                            {eventsForSelectedDate.map(event => (
                                <div className={styles.eventInfo} key={event.id}>
                                    <Link className={styles.eventLink} href={`/events/${event.title.toLowerCase().split(' ').join('-')}`}>{event.title}</Link>
                                    <div className={styles.time}>
                                        <span>
                                            <Clock />
                                            <p>{event.time}</p>
                                        </span>
                                        <span>
                                            <Location />
                                            <p>{event.location}</p>
                                        </span>
                                    </div>
                                    <p className={styles.eventDescription}>{event.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.noEventDescription}><Alert />No events for {selectedDate?.toDateString()}</p>
                    )}
                </div>
                <h2 className={`${styles.calendarHeader} ${nunito_sans.className}`}>{`${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}`}</h2>
                <div className={styles.daysContainer}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className={` ${nunito_sans.className} ${styles.dayOfWeek}`}>
                            {day}
                        </div>
                    ))}
                    {generateCalendarDays(currentYear, currentMonth)}
                </div>
            </div>

        </div>
    );
};

export default Calendar;
