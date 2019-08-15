const Container = styled.div``;
const Title = styled.h2``;
const Carousel = styled.div``;
const Ordered = styled.ol``;

const PreviousImg = props => {
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [dateRange, setDateRange] = useState([]);

    useEffect(() => {
        let end = moment(endDate, 'YYYY-MM-DD');
        let start = moment(startDate, 'YYYY-MM-DD');
        let dates = [end.format('YYYY-MM-DD')];

        while (end > start) {
            dates.push(end.subtract(1,'day').format('YYYY-MM-DD'));

        }
        setDateRange(dates);
    }, [startDate, endDate]);
    const updateStartDate = date => {
        setStartDate(date);

    };
    const updateEndDate = date => {
        setEndDate(date);
    };
    console.log(start.date);
}
