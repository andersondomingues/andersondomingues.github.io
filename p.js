$(document).ready(function() {
    
    const courses = {
        "Algorithms and Data Structures I": ["2025/1"],
        "Dependable Hardware Systems": ["2025/2", "2025/1"],
        "Foundations of Computing Systems": ["2025/2"],
        "Digital Systems": ["2025/2", "2025/1"]
    }
    
    for(const [course, terms] of Object.entries(courses)) {
        let details = $('<details></details>').css({
            padding: '10px',
            border: '1px solid gray',
            marginRight: '10px'
        });
        
        let summary = $('<summary></summary>').text(course);
        details.append(summary);
        
        let p = $('<p></p>');
        terms.forEach(term => {
            let a = $('<a></a>').addClass('icon').attr('href', '#').text(term);
            p.append(a).append(' '); // Add space between links
        });
        details.append(p);
        
        let container = $('<div></div>').addClass('w3-col l2 m6 w3-margin-bottom').css('cursor', 'pointer');
        container.append(details);
        
        $('#undergraduation').append(container); // Assuming there's a container with this ID
    }
});