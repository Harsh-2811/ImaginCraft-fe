interface DesignWrapperInterface {
  children: React.ReactNode
}

export const DesignWrapper: React.FC<DesignWrapperInterface> = ({
  children,
}) => {
  return (
    <>
      <div className="bg-auth-bg bg-no-repeat h-screen bg-[length:100%_100%] shadow-lg flex items-center justify-center">
        <div className="relative container mx-auto my-auto max-w-[1220px] px-[20px] w-full h-auto rounded-lg">
          {children}
        </div>
      </div>
    </>
  )
}
