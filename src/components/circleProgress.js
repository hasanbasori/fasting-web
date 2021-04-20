<Example label="Custom colors">
<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    textColor: "red",
    pathColor: "turquoise",
    trailColor: "gold"
  })}
/>
</Example>