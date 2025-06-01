function updateDateTime() {
            const options = {
                timeZone: 'Asia/Jakarta',
                hour12: false,
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };

            const formatter = new Intl.DateTimeFormat('en-GB', options);
            const parts = formatter.formatToParts(new Date());

            const get = (type) => parts.find(p => p.type === type).value;

            const day = get('day');
            const month = get('month');
            const year = get('year');
            const hour = get('hour');
            const minute = get('minute');
            const second = get('second');

            document.getElementById('day').innerHTML = `${day} <i class="text-gray-500">D</i>`;
            document.getElementById('month').innerHTML = `${month} <i class="text-gray-500">M</i>`;
            document.getElementById('year').innerHTML = `${year} <i class="text-gray-500">Y</i>`;
            document.getElementById('time').innerHTML = `${hour}:${minute}:${second} <i class="text-gray-500">H</i>`;
        }

        updateDateTime();
        setInterval(updateDateTime, 1000);