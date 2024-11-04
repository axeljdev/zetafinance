function Cards({ number, title, items1, items2, items3 }: { number: string, title: string, items1?: string, items2?: string, items3?: string }) {
  return (
    <div className="relative p-1 rounded-2xl bg-gradient-button-light to-accent">
      <div className="flex flex-col h-[23rem] lg:h-[20rem] rounded-xl bg-primary pl-4 pr-2">
        <p className="text-2xl font-bold mt-4">{number}</p>
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
        <ul className="list-disc p-4 text-md flex flex-col text-md">
          {items1 && (
            <li>
              <p>{items1}</p>
            </li>
          )}
          {items2 && (
            <li>
              <p>{items2}</p>
            </li>
          )}
          {items3 && (
            <li>
              <p>{items3}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Cards