import { useState, useEffect } from 'react';
import styles from './Calendar.module.css'; // Import CSS module for styling
import { nunito_sans } from '@/fonts/fonts';
import { events } from '../data';
import { Clock } from '@/icons/clock';
import { Location } from '@/icons/location';
import { Alert } from '@/icons/alert';
import Link from 'next/link';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';

const Calendar = () => {
    // const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [selectedEvents, setSelectedEvents] = useState(null);
    const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        const eventsForToday = filterEventsByDate(events, currentDate);
        setEventsForSelectedDate(eventsForToday);
        setSelectedDate(currentDate);
        console.log('eventsForToday', eventsForToday)
    }, []);

    const filterEventsByDate = (events, date) => {
        const filteredEvents = events.filter(event => {
            const eventDate = new Date(event.formattedDate);
            console.log('filteredEvents', new Date('2024-03-25'))
            return isSameDay(eventDate, date);
        });

        

        return filteredEvents.length > 0 ? filteredEvents : null;
    };

    const handleDayClick = (day) => {
        console.log('dayyyy', day)
        setSelectedDate(day);
        const eventsForSelectedDate = filterEventsByDate(events, day);
        setSelectedEvents(eventsForSelectedDate);
        setEventsForSelectedDate(eventsForSelectedDate);
    };

    console.log('selectedDate', selectedDate)

    const generateCalendarDays = (year, month) => {
        const days = [];
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const currentDate = new Date();

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
                    className={`${styles.day} ${isSameDay(date, currentDate) ? styles.currentDate : ''} ${selectedDate && isSameDay(date, selectedDate) ? styles.selected : ''}`}
                    onClick={() => handleDayClick(date)}
                >
                    {i}
                </div>
            );
        }

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

    console.log('eventsForSelectedDate', eventsForSelectedDate)
    console.log('currentYear', currentYear)
    console.log('currentMonth', currentMonth)

    return (
        <div className={`${styles.calendar} ${nunito_sans.className}`}>
            <div className={styles.calendarContentContainer}>
                <div className={`${styles.eventWrapper} ${nunito_sans.className}`}>
                    {eventsForSelectedDate ? (
                        <div className={styles.eventContent}>
                            <div className={styles.selectedDate}>
                                <h3 className={styles.selectedDateMonth}>{format(currentDate, 'MMM')}</h3>
                                <h3 className={styles.selectedDateDay}>{format(selectedDate, 'd')}</h3>
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
                            <p className={styles.noEventDescription}><Alert />No events for {selectedDate && format(selectedDate, 'yyyy-MM-dd')}</p>
                    )}
                </div>


                <h2 className={`${styles.calendarHeader} ${nunito_sans.className}`}>
                    {`${format(currentDate, 'MMMM')} ${currentYear}`}
                </h2>

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