// ✅ Define events globally at the top so they are accessible everywhere
const events = {
    "2025-01-05": { title: "New Year Kickoff", description: "Start the year with career planning.", time: "10:00 AM - 12:00 PM", location: "Career Center" },
    "2025-01-10": { title: "New Year Networking", description: "Kickstart the year with a professional networking event.", time: "5:00 PM - 7:00 PM", location: "Downtown Business Hub" },
    "2025-01-18": { title: "Resume Building Workshop", description: "Get hands-on guidance on crafting your resume.", time: "2:00 PM - 4:00 PM", location: "Library Conference Room" },
    "2025-01-25": { title: "Industry Insights Panel", description: "Hear from top industry leaders.", time: "6:00 PM - 8:00 PM", location: "University Auditorium" },
    "2025-01-30": { title: "Personal Finance for Professionals", description: "Learn to manage your money as a young professional.", time: "4:00 PM - 6:00 PM", location: "Business School" },

    "2025-02-07": { title: "Effective Job Searching", description: "Learn job search strategies from experts.", time: "3:00 PM - 5:00 PM", location: "Online - Zoom" },
    "2025-02-14": { title: "Valentine's Day Career Fair", description: "Find your perfect job match!", time: "10:00 AM - 3:00 PM", location: "Convention Center" },
    "2025-02-21": { title: "Interview Prep Workshop", description: "Ace your next job interview with confidence.", time: "5:00 PM - 7:00 PM", location: "Career Services" },
    "2025-02-28": { title: "Resume Writing Bootcamp", description: "Improve your resume with expert tips.", time: "3:00 PM - 5:00 PM", location: "Career Center" },
    "2025-02-29": { title: "Women in Leadership", description: "Panel discussion with inspiring women leaders.", time: "6:00 PM - 8:00 PM", location: "University Hall" },

    "2025-03-10": { title: "Job Fair", description: "Meet top employers at our job fair!", time: "10:00 AM - 2:00 PM", location: "Buffalo Convention Center" },
    "2025-03-15": { title: "Resume Workshop", description: "Learn how to craft the perfect resume.", time: "3:00 PM - 5:00 PM", location: "Library Meeting Room" },
    "2025-03-22": { title: "Networking Night", description: "Connect with professionals in your field.", time: "6:00 PM - 8:00 PM", location: "Williamsville East High School" },
    "2025-03-26": { title: "LinkedIn Optimization Workshop", description: "Improve your LinkedIn profile to stand out.", time: "5:00 PM - 7:00 PM", location: "Career Center" },
    "2025-03-31": { title: "Internship Info Session", description: "Discover internship opportunities and how to apply.", time: "1:00 PM - 2:30 PM", location: "Room 204, Career Center" },

    "2025-04-05": { title: "Spring Internship Fair", description: "Find summer internship opportunities.", time: "10:00 AM - 3:00 PM", location: "University Gymnasium" },
    "2025-04-12": { title: "Company Tour", description: "Visit top companies and explore job opportunities.", time: "9:00 AM - 12:00 PM", location: "Tech Hub" },
    "2025-04-19": { title: "Cover Letter Workshop", description: "Learn how to write compelling cover letters.", time: "3:00 PM - 5:00 PM", location: "Library Conference Room" },
    "2025-04-22": { title: "Spring Career Expo", description: "Meet recruiters from top companies.", time: "10:00 AM - 4:00 PM", location: "Exhibition Hall" },
    "2025-04-29": { title: "Public Speaking for Professionals", description: "Enhance your confidence in presentations.", time: "4:00 PM - 6:00 PM", location: "Lecture Hall B" },

    "2025-05-10": { title: "Startups & Entrepreneurship Panel", description: "Learn how to start your own business.", time: "5:00 PM - 7:00 PM", location: "Startup Incubator" },
    "2025-05-18": { title: "LinkedIn Workshop", description: "Optimize your LinkedIn profile for job hunting.", time: "4:00 PM - 6:00 PM", location: "Online - Zoom" },
    "2025-05-25": { title: "Career Fair", description: "Meet top recruiters and get hired!", time: "10:00 AM - 3:00 PM", location: "Downtown Conference Center" },
    "2025-05-28": { title: "Negotiating Your Salary", description: "Learn to confidently negotiate job offers.", time: "6:00 PM - 8:00 PM", location: "Business School" },
    "2025-05-31": { title: "Leadership Development Workshop", description: "Improve your leadership skills.", time: "2:00 PM - 4:00 PM", location: "University Conference Room" },

    "2025-06-05": { title: "AI in Business", description: "Explore AI trends in the corporate world.", time: "10:00 AM - 12:00 PM", location: "Tech Conference Room" },
    "2025-06-10": { title: "Effective Communication Skills", description: "Master communication in professional settings.", time: "3:00 PM - 5:00 PM", location: "University Hall" },
    "2025-06-15": { title: "Coding Bootcamp", description: "Learn web development from scratch.", time: "9:00 AM - 3:00 PM", location: "Tech Hub" },
    "2025-06-20": { title: "Resume Critique Session", description: "Get your resume reviewed by experts.", time: "2:00 PM - 4:00 PM", location: "University Career Center" },
    "2025-06-25": { title: "Financial Planning for Millennials", description: "Plan your financial future with expert guidance.", time: "4:00 PM - 6:00 PM", location: "Business School" },
    "2025-06-30": { title: "Entrepreneurship Strategies", description: "Learn how to start and grow your business.", time: "5:00 PM - 7:00 PM", location: "Startup Incubator" },

    "2025-07-08": { title: "Entrepreneurship Workshop", description: "Learn from successful entrepreneurs and get funding tips.", time: "2:00 PM - 5:00 PM", location: "Startup Incubator" },
    "2025-07-15": { title: "Tech Startups Panel", description: "Hear from founders about launching a startup.", time: "5:00 PM - 7:00 PM", location: "Tech Hub" },
    "2025-07-20": { title: "Building a Personal Brand", description: "Create a strong professional identity.", time: "3:00 PM - 5:00 PM", location: "Business School" },
    "2025-07-25": { title: "Career Fair Prep", description: "Get ready to impress recruiters.", time: "10:00 AM - 12:00 PM", location: "Career Center" },

    "2025-08-05": { title: "Advanced Leadership Training", description: "Enhance your leadership skills.", time: "3:00 PM - 5:00 PM", location: "University Hall" },
    "2025-08-12": { title: "Industry Insights Panel", description: "Get career advice from industry leaders.", time: "4:00 PM - 6:00 PM", location: "Conference Hall" },
    "2025-08-18": { title: "Investment Strategies", description: "Learn how to grow your wealth.", time: "5:00 PM - 7:00 PM", location: "Business School" },
    "2025-08-22": { title: "Startups and Innovation", description: "Find out how to turn ideas into businesses.", time: "2:00 PM - 4:00 PM", location: "Startup Hub" },

    "2025-09-05": { title: "Project Management Essentials", description: "Learn project management fundamentals.", time: "3:00 PM - 5:00 PM", location: "University Hall" },
    "2025-09-10": { title: "Networking Mixer", description: "Expand your professional connections.", time: "6:00 PM - 8:00 PM", location: "Downtown Lounge" },
    "2025-09-15": { title: "Marketing Analytics", description: "Understand marketing data and trends.", time: "4:00 PM - 6:00 PM", location: "Business School" },
    "2025-09-18": { title: "Marketing Trends Workshop", description: "Explore the latest marketing strategies.", time: "4:00 PM - 6:00 PM", location: "Marketing Institute" },
    "2025-09-22": { title: "AI in Business", description: "Discuss the impact of AI in various industries.", time: "5:00 PM - 7:00 PM", location: "Tech Conference Room" },
    "2025-09-28": { title: "Building an Online Business", description: "Learn e-commerce strategies from experts.", time: "2:00 PM - 4:00 PM", location: "Startup Hub" },

    "2025-10-05": { title: "Tech Innovations Summit", description: "Explore the latest technology trends.", time: "10:00 AM - 4:00 PM", location: "Tech Hub Auditorium" },
    "2025-10-10": { title: "Corporate Networking Night", description: "Meet executives from leading firms.", time: "5:00 PM - 8:00 PM", location: "Downtown Business Hall" },
    "2025-10-15": { title: "Financial Literacy Workshop", description: "Master personal finance and investing.", time: "3:00 PM - 5:00 PM", location: "Business School" },
    "2025-10-20": { title: "Job Search Bootcamp", description: "Learn tips and strategies to land your dream job.", time: "4:00 PM - 6:00 PM", location: "Career Services" },
    "2025-10-25": { title: "Entrepreneurship Essentials", description: "Get insights into launching your own business.", time: "3:00 PM - 5:00 PM", location: "Startup Incubator" },
    "2025-10-30": { title: "Effective Leadership Training", description: "Develop skills to lead teams successfully.", time: "2:00 PM - 4:00 PM", location: "University Hall" },

    "2025-11-05": { title: "AI and Automation Conference", description: "Understand the impact of AI in various industries.", time: "10:00 AM - 3:00 PM", location: "Tech Hub" },
    "2025-11-10": { title: "Remote Work Strategies", description: "Learn how to work efficiently from anywhere.", time: "3:00 PM - 5:00 PM", location: "Online - Zoom" },
    "2025-11-15": { title: "Women in Tech Symposium", description: "Celebrate and empower women in the tech industry.", time: "5:00 PM - 7:00 PM", location: "Conference Hall" },
    "2025-11-20": { title: "Cybersecurity Essentials", description: "Learn about protecting your digital presence.", time: "4:00 PM - 6:00 PM", location: "Business School" },
    "2025-11-25": { title: "Diversity in Leadership Panel", description: "Gain insights from diverse leadership experiences.", time: "3:00 PM - 5:00 PM", location: "University Auditorium" },
    "2025-11-30": { title: "Self-Development Strategies", description: "Enhance your career through continuous learning.", time: "2:00 PM - 4:00 PM", location: "Online - Zoom" },

    "2025-12-05": { title: "End-of-Year Career Reflection", description: "Evaluate your professional growth and set goals.", time: "3:00 PM - 5:00 PM", location: "Career Center" },
    "2025-12-10": { title: "Holiday Networking Social", description: "Expand your network before the new year.", time: "5:00 PM - 7:00 PM", location: "Downtown Business Hub" },
    "2025-12-15": { title: "Mindfulness for Professionals", description: "Manage stress and enhance productivity.", time: "4:00 PM - 6:00 PM", location: "University Hall" },
    "2025-12-20": { title: "Career Planning for 2026", description: "Set career resolutions for the upcoming year.", time: "3:00 PM - 5:00 PM", location: "Career Services" },
    "2025-12-25": { title: "Giving Back: Volunteering for Career Growth", description: "Learn how volunteer work can enhance your career.", time: "2:00 PM - 4:00 PM", location: "Community Center" },
    "2025-12-30": { title: "Goal-Setting Mastery", description: "Plan and achieve your professional goals effectively.", time: "4:00 PM - 6:00 PM", location: "Online - Zoom" }

};

console.log("✅ Events object loaded:", events);

// Remaining script remains unchanged...


// ✅ Debugging to confirm events exist
console.log("✅ Events object loaded:", events);

document.addEventListener("DOMContentLoaded", function () {
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    const monthYear = document.getElementById("monthYear");
    const daysContainer = document.getElementById("daysContainer");
    const eventPopup = document.getElementById("eventPopup");
    const closePopupButton = document.getElementById("closeEventPopup");

    if (!eventPopup) console.error("❌ ERROR: eventPopup element not found!");
    if (!closePopupButton) console.error("❌ ERROR: closeEventPopup button not found!");

    function loadCalendar(month, year) {
        console.log("📅 Loading calendar for", month + 1, year);
        console.log("Checking events:", events); // Debugging log
    
        daysContainer.innerHTML = "";
        monthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            let date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            let dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;
    
            if (events[date]) {
                console.log(`✅ Event found for ${date}: ${events[date].title}`);
                dayElement.classList.add("event-day");
                dayElement.style.backgroundColor = "#ff9999"; // Highlight event days
                dayElement.onclick = function () {
                    showEvent(date);
                };
            } else {
                console.log(`❌ No event for ${date}`);
            }
    
            daysContainer.appendChild(dayElement);
        }
    }

    function showEvent(date) {
        const event = events[date];
        if (event) {
            document.getElementById("eventTitle").textContent = event.title;
            document.getElementById("eventDate").textContent = `📅 Date: ${date}`;
            document.getElementById("eventTime").textContent = `⏰ Time: ${event.time}`;
            document.getElementById("eventLocation").textContent = `📍 Location: ${event.location}`;
            document.getElementById("eventDescription").textContent = `ℹ️ ${event.description}`;
            eventPopup.style.display = "block";
        }
    }

    function closePopup() {
        eventPopup.style.display = "none";
    }

    // ✅ Ensure event listener is attached correctly
    closePopupButton.addEventListener("click", closePopup);

    window.prevMonth = function () {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        loadCalendar(currentMonth, currentYear);
    };

    window.nextMonth = function () {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        loadCalendar(currentMonth, currentYear);
    };

    loadCalendar(currentMonth, currentYear);
});

