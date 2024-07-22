const Rating = ({ maxValue = 5, initialValue = 0, onRatingUpdated }) => {
    const [value, setValue] = useState(initialValue);
    const [starList, setStarList] = useState([]);
   
    useEffect(() => {
      createStarList(value);
   
      const globalEventEmitter = window.globalEventEmitter;
   
      if (globalEventEmitter) {
        const subscription = globalEventEmitter.events$.subscribe((event) => {
          if (event === "closeModal") {
            handleModalClose();
          }
        });
   
        return () => {
          subscription.unsubscribe();
        };
      }
    }, [value]);
   
    const createStarList = (numberOfStars) => {
      const stars = [];
      for (let i = 1; i <= maxValue; i++) {
        stars.push(
          <span
            key={i}
            className="rating"
            onMouseOver={() => createStarList(i)}
            onMouseOut={() => createStarList(value)}
            onClick={() => handleRatingUpdate(i)}
          >
            {i <= numberOfStars ? "\u2605" : "\u2606"}
          </span>
        );
      }
      setStarList(stars);
    };
   
    const handleRatingUpdate = (newValue) => {
      setValue(newValue);
      if (onRatingUpdated) {
        onRatingUpdated({ value: newValue });
      }
    };
   
    const handleModalClose = useCallback(() => {
      console.log("Modal closed!");
    }, []);
   
    return <div>{starList}</div>;
  };
   
  export default Rating;