import Slider from "./common/Slider"
import NotesIcon from '@mui/icons-material/Notes';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
const Welcome = () => {
  const slides = [{path: 'photos/AHS.webp'}, {path: 'photos/AHS_2011.webp'}, {path: 'photos/AHS_Students.webp'}]
  return (
      <>
        <Slider slides={slides}/>
          <div className={`grid justify-items-center pt-3 gap-6 bg-gradient-to-r from-blue-100 to-teal-100 sm:grid-cols-2`}>
            <section className={`flex flex-col items-center border border-t-8 border-t-blue-400 border-gray-500 m-2 py-2 rounded-xl`}>
                <h1 className={`text-2xl font-heading underline py-2`}>About School <NotesIcon style={{fontSize: 18}}/></h1>
                <p className={`font-montserrat w-11/12 text-justify`}><span className={`text-lg font-semibold`}>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. A alias commodi consequuntur
                    corporis dignissimos, eaque eligendi, fugit odio optio quo reprehenderit soluta,
                    suscipit veritatis vero voluptatum. Aliquam aperiam architecto asperiores aspernatur
                    atque beatae blanditiis corporis debitis delectus, deserunt distinctio ducimus ex
                    exercitationem fuga fugit illo laboriosam laudantium maiores maxime nam nulla numquam
                    porro praesentium tempora tempore temporibus, unde velit veritatis voluptas voluptatum.
                    Alias aliquid at dolorem esse exercitationem, facilis in incidunt modi neque nisi numquam
                    officiis provident, vero? Accusamus commodi consectetur culpa dolores eius fuga harum
                    incidunt maiores molestiae molestias mollitia neque pariatur, perferendis quas quos
                    ratione repellat saepe sed sit suscipit tempora temporibus veritatis? Architecto asperiores
                    aspernatur corporis dolorem doloribus eligendi error expedita fugiat magnam magni natus
                    pariatur quae repellat repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. A aliquid at commodi eligendi expedita explicabo facere, laboriosam nihil perferendis
                    quam, quibusdam reiciendis repudiandae sit ullam veritatis. Adipisci assumenda commodi
                    dignissimos esse itaque, modi natus necessitatibus quasi, velit, veritatis voluptate
                    voluptatum! Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit. </p>
            </section>

              <div className={`flex flex-col items-center mt-2`}>
                  <section className={`flex justify-center flex-col border border-gray-500 border-t-8 border-t-blue-400 p-2 rounded-xl mb-4 w-11/12 items-center`}>
                      <h1 className={`text-2xl font-heading border-b-blue-600 underline flex justify-center py-2`}>Notification & Updates <DynamicFeedIcon style={{fontSize: 18}}/></h1>
                      <div className={`grid`}>
                          <p className={`first-letter:font-bold`}>A. Lorem ipsum dolor sit amet, consectetur adi!</p>
                          <p className={`first-letter:font-bold`}>B. Adipisci aperiam commodi consequuntur dicta </p>
                          <p className={`first-letter:font-bold`}>C. nulla quaerat quidem quis quo sequi tempora temporibus?</p>
                          <p className={`first-letter:font-bold`}>D. quas sapiente voluptas, voluptatum.</p>
                          <p className={`first-letter:font-bold`}>E. esse excepturi itaque mollitia nemo nisi ratione veniam!</p>
                          <p className={`first-letter:font-bold`}>F. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </section>

                  <section className={`flex flex-col items-center w-11/12 border mb-3 rounded-xl border-gray-500 border-t-8 border-t-blue-400`}>
                      <h1 className={`font-heading py-2 text-2xl underline`}>Head of school</h1>
                      <div className={`flex gap-3 flex-col items-center justify-center`}>
                          <img src={`/photos/flower.jpg`} className={`w-44 h-44 flex-shrink-0 bg-red-400 rounded-full`}/>
                          <p className={`p-3 rounded text-justify`}>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa fugiat, fugit itaque labore laudantium minima molestiae nulla quia recusandae rem tempora voluptas. Earum excepturi in omnis placeat quidem rem sequi sunt suscipit voluptatum. Earum facere harum modi nesciunt nisi odio perferendis, porro, quaerat quia quod sed tempore, ut veniam.
                          </p>
                      </div>

                  </section>
              </div>

          </div>
      </>

  )
}

export default Welcome