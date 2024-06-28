import Socials from "./Socials"

function Footer() {
  return (
    <footer className="bg-secondary-foreground dark:bg-secondary py-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials containerStyles='flex gap-x-8 mx-auto xl:mx-0 mb-4' iconStyles='text-[20px] text-primary hover:text-white'/>
          <div className='text-muted-foreground'>
            Copyright &copy; Shivam Armarkar 2024
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer