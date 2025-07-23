
 const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
        <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2015/04/27/1331719674721_2/dj-kl-jay" alt="imagem da comodação" className="aspect-square object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque maiores tempora, laudantium molestiae a, hic sequi dolores ratione debitis assumenda soluta optio doloremque perspiciatis vitae mollitia ullam ut aliquid numquam!</p>
        <p><span className="font-semibold">R$ 550,00</span> Por Noite</p>
    </a>
  )
}
export default Item