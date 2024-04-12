interface Props {
  userScore: number;
  errors: string[];
  message: string;
}

export const GptOrthographyMessages = ({ userScore, errors, message }: Props) => {
  return (
    <div className="col-start-1 col-end-9 p-5 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex flex-shrink-0 justify-center items-center bg-green-600 rounded-full size-10">G</div>
        <div className="relative bg-black bg-opacity-25 shadow ml-3 px-5 pt-4 pb-2 rounded-xl font-normal text-sm text-wrap 2xl:text-base antialiased">
          <h3>Puntaje: {userScore}% escrito correctamente</h3>
          <p>{message}</p>

          {errors.length === 0 ? (
            <p>No se han encontrado errores</p>
          ) : (
            <>
              <h3>Errores encontrados:</h3>
              <ul>
                {errors.map((error,i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
